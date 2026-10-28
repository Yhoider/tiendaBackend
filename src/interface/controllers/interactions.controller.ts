import type { NextFunction, Request, Response } from "express";
import { prisma } from "../../infrastructure/database/prisma.js";

type Item = { medicamentoId: string; cantidad: number };
const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function orderInput(body: unknown): { direccionEntrega: string; items: Item[] } | null {
  if (!body || typeof body !== "object") return null;
  const { direccionEntrega, items } = body as Record<string, unknown>;
  if (typeof direccionEntrega !== "string" || direccionEntrega.trim().length < 5 || !Array.isArray(items) || items.length === 0) return null;
  const parsed = items.map((item) => {
    if (!item || typeof item !== "object") return null;
    const { medicamentoId, cantidad } = item as Record<string, unknown>;
    return typeof medicamentoId === "string" && uuidRegex.test(medicamentoId) && Number.isInteger(cantidad) && (cantidad as number) > 0 ? { medicamentoId, cantidad: cantidad as number } : null;
  });
  if (parsed.some((item) => item === null) || new Set(parsed.map((item) => item!.medicamentoId)).size !== parsed.length) return null;
  return { direccionEntrega: direccionEntrega.trim(), items: parsed as Item[] };
}

const orderInclude = { pedido_items: { include: { medicamentos: { select: { id: true, nombre: true, imagen_url: true } } } } } as const;

export class InteractionsController {
  async crear(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const input = orderInput(req.body);
      if (!input || !req.user) { res.status(400).json({ error: { message: "Dirección e items de pedido inválidos" } }); return; }
      const medicines = await prisma.medicamentos.findMany({ where: { id: { in: input.items.map((item) => item.medicamentoId) }, activo: true }, select: { id: true, nombre: true, precio: true, stock: true, requiere_receta: true } });
      if (medicines.length !== input.items.length) { res.status(400).json({ error: { message: "Uno o más medicamentos no están disponibles" } }); return; }
      const byId = new Map(medicines.map((medicine) => [medicine.id, medicine]));
      for (const item of input.items) {
        const medicine = byId.get(item.medicamentoId)!;
        if (medicine.stock < item.cantidad || medicine.requiere_receta) { res.status(400).json({ error: { message: "El pedido contiene un medicamento sin stock o que requiere receta" } }); return; }
      }
      const total = input.items.reduce((sum, item) => sum + Number(byId.get(item.medicamentoId)!.precio) * item.cantidad, 0);
      const order = await prisma.$transaction(async (tx) => {
        const created = await tx.pedidos.create({ data: { usuario_id: req.user!.id, direccion_entrega: input.direccionEntrega, subtotal: total, total, pedido_items: { create: input.items.map((item) => { const medicine = byId.get(item.medicamentoId)!; const subtotal = Number(medicine.precio) * item.cantidad; return { medicamento_id: medicine.id, nombre_producto: medicine.nombre, precio_unitario: medicine.precio, cantidad: item.cantidad, subtotal }; }) } }, include: orderInclude });
        await Promise.all(input.items.map((item) => tx.medicamentos.update({ where: { id: item.medicamentoId }, data: { stock: { decrement: item.cantidad } } })));
        return created;
      });
      res.status(201).json({ data: order });
    } catch (error) { next(error); }
  }

  async mias(req: Request, res: Response, next: NextFunction): Promise<void> {
    try { res.status(200).json({ data: await prisma.pedidos.findMany({ where: { usuario_id: req.user!.id }, include: orderInclude, orderBy: { created_at: "desc" } }) }); } catch (error) { next(error); }
  }

  async listar(req: Request, res: Response, next: NextFunction): Promise<void> {
    try { res.status(200).json({ data: await prisma.pedidos.findMany({ include: { ...orderInclude, usuarios: { select: { id: true, nombre: true, correo: true } } }, orderBy: { created_at: "desc" } }) }); } catch (error) { next(error); }
  }
}
export const interactionsController = new InteractionsController();
