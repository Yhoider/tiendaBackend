import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { NextFunction, Request, Response } from "express";
import { prisma } from "../../infrastructure/database/prisma.js";

const uploadsDirectory = path.resolve(process.cwd(), "uploads");
const allowedFiles: Record<string, string> = {
  "application/pdf": ".pdf",
  "image/jpeg": ".jpg",
  "image/png": ".png",
};

export class RecetasController {
  async crear(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const header = req.headers["content-type"];
      const contentType = typeof header === "string" ? header.split(";", 1)[0] ?? "" : "";
      const extension = allowedFiles[contentType];
      if (!req.user || !extension || !Buffer.isBuffer(req.body) || req.body.length === 0) {
        res.status(400).json({ error: { message: "Adjunta una receta PDF, JPG o PNG válida" } });
        return;
      }

      await mkdir(uploadsDirectory, { recursive: true });
      const fileName = `${randomUUID()}${extension}`;
      const filePath = path.join(uploadsDirectory, fileName);
      await writeFile(filePath, req.body, { flag: "wx" });
      try {
        const receta = await prisma.recetas.create({
          data: { usuario_id: req.user.id, archivo_url: `/uploads/${fileName}` },
          select: { id: true, estado: true, created_at: true },
        });
        res.status(201).json({ data: { ...receta, archivo_url: `/api/recetas/${receta.id}/archivo` } });
      } catch (error) {
        await unlink(filePath).catch(() => undefined);
        throw error;
      }
    } catch (error) {
      next(error);
    }
  }

  async archivo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user || typeof req.params.id !== "string") {
        res.status(400).json({ error: { message: "Receta inválida" } });
        return;
      }
      const receta = await prisma.recetas.findFirst({
        where: { id: req.params.id, ...(req.user.role === "admin" ? {} : { usuario_id: req.user.id }) },
        select: { archivo_url: true },
      });
      if (!receta) {
        res.status(404).json({ error: { message: "Receta no encontrada" } });
        return;
      }
      res.sendFile(path.basename(receta.archivo_url), { root: uploadsDirectory });
    } catch (error) {
      next(error);
    }
  }
}

export const recetasController = new RecetasController();
