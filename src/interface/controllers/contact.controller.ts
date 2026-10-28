import type { NextFunction, Request, Response } from "express";
import { prisma } from "../../infrastructure/database/prisma.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class ContactController {
  async crear(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.body || typeof req.body !== "object") {
        res.status(400).json({ error: { message: "Nombre, correo y mensaje válidos son requeridos" } });
        return;
      }
      const { nombre, correo, mensaje } = req.body as Record<string, unknown>;
      if (
        typeof nombre !== "string" || nombre.trim().length < 2 ||
        typeof correo !== "string" || !emailRegex.test(correo) ||
        typeof mensaje !== "string" || mensaje.trim().length < 5
      ) {
        res.status(400).json({ error: { message: "Nombre, correo y mensaje válidos son requeridos" } });
        return;
      }
      const contact = await prisma.mensajes_contacto.create({
        data: { nombre: nombre.trim(), correo: correo.trim().toLowerCase(), mensaje: mensaje.trim() },
        select: { id: true, created_at: true },
      });
      res.status(201).json({ data: contact });
    } catch (error) {
      next(error);
    }
  }
}

export const contactController = new ContactController();
