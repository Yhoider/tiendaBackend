import bcrypt from "bcrypt";
import type { NextFunction, Request, Response } from "express";
import { prisma } from "../../infrastructure/database/prisma.js";
import { isRole, type Role } from "../../domain/rol.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class AdminController {
  async listarUsuarios(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await prisma.usuarios.findMany({
        orderBy: { created_at: "desc" },
        select: { id: true, nombre: true, correo: true, activo: true, created_at: true, roles: { select: { nombre: true } } },
      });
      res.status(200).json({ data: users.map((user) => ({ id: user.id, nombre: user.nombre, email: user.correo, activo: user.activo, created_at: user.created_at, role: user.roles.nombre })) });
    } catch (error) { next(error); }
  }

  async crearUsuario(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.body || typeof req.body !== "object") { res.status(400).json({ error: { message: "Datos de usuario inválidos" } }); return; }
      const { nombre, email, password, role } = req.body as Record<string, unknown>;
      if (typeof nombre !== "string" || nombre.trim().length < 2 || typeof email !== "string" || !emailRegex.test(email) || typeof password !== "string" || password.length < 8 || !isRole(role)) {
        res.status(400).json({ error: { message: "Nombre, email, contraseña de 8 caracteres y rol válidos son requeridos" } });
        return;
      }
      const normalizedEmail = email.trim().toLowerCase();
      const exists = await prisma.usuarios.findUnique({ where: { correo: normalizedEmail }, select: { id: true } });
      if (exists) { res.status(409).json({ error: { message: "El email ya está registrado" } }); return; }
      const userRole = await prisma.roles.findUnique({ where: { nombre: role as Role }, select: { id: true } });
      if (!userRole) throw new Error("El rol no está configurado");
      const user = await prisma.usuarios.create({
        data: { nombre: nombre.trim(), correo: normalizedEmail, password_hash: await bcrypt.hash(password, 12), rol_id: userRole.id },
        select: { id: true, nombre: true, correo: true, activo: true, created_at: true },
      });
      res.status(201).json({ data: { ...user, email: user.correo, role } });
    } catch (error) { next(error); }
  }

  async listarRecetas(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const estado = typeof req.query.estado === "string" ? req.query.estado.trim() : "";
      const recipes = await prisma.recetas.findMany({
        where: estado ? { estado } : {},
        include: { usuarios_recetas_usuario_idTousuarios: { select: { nombre: true, correo: true } } },
        orderBy: { created_at: "desc" },
      });
      res.status(200).json({ data: recipes.map((recipe) => ({ id: recipe.id, estado: recipe.estado, observaciones: recipe.observaciones, created_at: recipe.created_at, archivo_url: `/api/recetas/${recipe.id}/archivo`, user: { nombre: recipe.usuarios_recetas_usuario_idTousuarios.nombre, email: recipe.usuarios_recetas_usuario_idTousuarios.correo } })) });
    } catch (error) { next(error); }
  }

  async decidirReceta(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { id } = req.params;
      if (!req.body || typeof req.body !== "object") {
        res.status(400).json({ error: { message: "Decisión de receta inválida" } });
        return;
      }
      const { estado, observaciones } = req.body as Record<string, unknown>;
      if (typeof id !== "string" || (estado !== "aprobada" && estado !== "rechazada") || (observaciones !== undefined && typeof observaciones !== "string")) {
        res.status(400).json({ error: { message: "Decisión de receta inválida" } });
        return;
      }
      const recipe = await prisma.recetas.update({
        where: { id },
        data: { estado, observaciones: typeof observaciones === "string" ? observaciones.trim() || null : null, revisado_por: req.user!.id, fecha_revision: new Date() },
        select: { id: true, estado: true, observaciones: true, fecha_revision: true },
      });
      res.status(200).json({ data: recipe });
    } catch (error) { next(error); }
  }
}

export const adminController = new AdminController();
