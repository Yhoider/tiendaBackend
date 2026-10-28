
import type { Request, Response, NextFunction } from "express";
import { listarMedicamentosUseCase } from "../../application/use-cases/listar-medicamentos.use-case.js";
import { buscarMedicamentoUseCase } from "../../application/use-cases/buscar-medicamento.use-case.js";
import { medicamentosRepository } from "../../infrastructure/repositories/medicamentos.repository.js";
import type {
  ActualizarMedicamento,
  CrearMedicamento,
} from "../../domain/medicamento-input.js";

const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function productBody(body: unknown): CrearMedicamento | null;
function productBody(body: unknown, partial: false): CrearMedicamento | null;
function productBody(body: unknown, partial: true): ActualizarMedicamento | null;
function productBody(
  body: unknown,
  partial = false,
): CrearMedicamento | ActualizarMedicamento | null {
  if (!body || typeof body !== "object") return null;
  const value = body as Record<string, unknown>;
  if (!partial && (typeof value.nombre !== "string" || !value.nombre.trim())) return null;
  if (!partial && (typeof value.precio !== "number" || value.precio < 0)) return null;
  if (value.nombre !== undefined && (typeof value.nombre !== "string" || !value.nombre.trim())) return null;
  if (value.precio !== undefined && (typeof value.precio !== "number" || value.precio < 0)) return null;
  if (
    value.stock !== undefined &&
    (typeof value.stock !== "number" ||
      !Number.isInteger(value.stock) ||
      value.stock < 0)
  ) {
    return null;
  }
  if (value.categoria_id !== undefined && value.categoria_id !== null && (typeof value.categoria_id !== "string" || !uuidRegex.test(value.categoria_id))) return null;
  if (value.requiere_receta !== undefined && typeof value.requiere_receta !== "boolean") return null;
  if (value.activo !== undefined && typeof value.activo !== "boolean") return null;
  if (value.descripcion !== undefined && value.descripcion !== null && typeof value.descripcion !== "string") return null;
  if (value.imagen_url !== undefined && value.imagen_url !== null && typeof value.imagen_url !== "string") return null;
  const data: ActualizarMedicamento = {};
  if (typeof value.nombre === "string") data.nombre = value.nombre.trim();
  if (typeof value.precio === "number") data.precio = value.precio;
  if (typeof value.stock === "number") data.stock = value.stock;
  if (typeof value.categoria_id === "string" || value.categoria_id === null) data.categoria_id = value.categoria_id;
  if (typeof value.requiere_receta === "boolean") data.requiere_receta = value.requiere_receta;
  if (typeof value.activo === "boolean") data.activo = value.activo;
  if (typeof value.descripcion === "string" || value.descripcion === null) data.descripcion = value.descripcion;
  if (typeof value.imagen_url === "string" || value.imagen_url === null) data.imagen_url = value.imagen_url;

  if (partial) return data;
  return {
    nombre: data.nombre!,
    precio: data.precio!,
    ...(typeof data.descripcion === "string" ? { descripcion: data.descripcion } : {}),
    ...(typeof data.imagen_url === "string" ? { imagen_url: data.imagen_url } : {}),
    ...(typeof data.categoria_id === "string" ? { categoria_id: data.categoria_id } : {}),
    ...(data.requiere_receta !== undefined ? { requiere_receta: data.requiere_receta } : {}),
    ...(data.stock !== undefined ? { stock: data.stock } : {}),
  };
}

export class ProductsController {
  async listar(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const page = Number(req.query.page ?? 1);
      const limit = Number(req.query.limit ?? 10);
      if (!Number.isInteger(page) || !Number.isInteger(limit) || page < 1 || limit < 1 || limit > 100) {
        res.status(400).json({ error: { message: "page y limit deben ser enteros válidos" } });
        return;
      }
      const { data, total } = await listarMedicamentosUseCase.ejecutar(page, limit);
      res.status(200).json({ pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }, data });
    } catch (error) {
      next(error);
    }
  }

  async buscarPorId(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      const id = req.params.id;

        if (typeof id !== "string") {
        res.status(400).json({
            error: { message: "El ID es obligatorio y debe ser único" },
        });
        return;
        }
      if (!uuidRegex.test(id)) {
        res.status(400).json({ error: { message: "El ID debe ser un UUID válido" } });
        return;
      }
      const medicamento = await buscarMedicamentoUseCase.ejecutar(id);

      if (!medicamento) {
        res.status(404).json({
          error: { message: "Medicamento no encontrado" },
        });
        return;
      }

      res.status(200).json({ data: medicamento });
    } catch (error) {
      next(error);
    }
  }

  async crear(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = productBody(req.body);
      if (!data) { res.status(400).json({ error: { message: "Datos de medicamento inválidos" } }); return; }
      const medicamento = await medicamentosRepository.crear(data);
      res.status(201).json({ data: medicamento });
    } catch (error) { next(error); }
  }

  async actualizar(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      const data = productBody(req.body, true);
      if (typeof id !== "string" || !uuidRegex.test(id) || !data || Object.keys(data).length === 0) {
        res.status(400).json({ error: { message: "Datos de actualización inválidos" } });
        return;
      }
      const medicamento = await medicamentosRepository.actualizar(id, data);
      if (!medicamento) { res.status(404).json({ error: { message: "Medicamento no encontrado" } }); return; }
      res.status(200).json({ data: medicamento });
    } catch (error) { next(error); }
  }

  async eliminar(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      if (typeof id !== "string" || !uuidRegex.test(id)) {
        res.status(400).json({ error: { message: "El ID debe ser un UUID válido" } });
        return;
      }
      if (!await medicamentosRepository.eliminar(id)) { res.status(404).json({ error: { message: "Medicamento no encontrado" } }); return; }
      res.status(204).send();
    } catch (error) { next(error); }
  }
}

export const productsController = new ProductsController();
