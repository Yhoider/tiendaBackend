import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../../infrastructure/database/prisma.js";
import { isRole, type Role } from "../../domain/rol.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const credentials = (body: unknown, withName = false) => {
  if (!body || typeof body !== "object") return null;
  const { nombre, email, password } = body as Record<string, unknown>;
  if ((withName && (typeof nombre !== "string" || nombre.trim().length < 2)) || typeof email !== "string" || !emailRegex.test(email) || typeof password !== "string" || !password || (withName && password.length < 8)) return null;
  return { nombre: typeof nombre === "string" ? nombre.trim() : undefined, email: email.toLowerCase().trim(), password };
};

const makeToken = (id: string, role: Role) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("La variable JWT_SECRET no está definida");
  return jwt.sign({ id, role }, secret, { expiresIn: process.env.JWT_EXPIRES_IN || "1h" } as jwt.SignOptions);
};

export class AuthController {
  async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const input = credentials(req.body, true);
      if (!input) { res.status(400).json({ error: { message: "Nombre, email y contraseña (mínimo 8 caracteres) son requeridos" } }); return; }
      const exists = await prisma.usuarios.findUnique({ where: { correo: input.email }, select: { id: true } });
      if (exists) { res.status(409).json({ error: { message: "El email ya está registrado" } }); return; }
      const role = await prisma.roles.findUnique({ where: { nombre: "cliente" } });
      if (!role) throw new Error("El rol cliente no está configurado; revisa la tabla roles");
      const user = await prisma.usuarios.create({ data: { nombre: input.nombre!, correo: input.email, password_hash: await bcrypt.hash(input.password, 12), rol_id: role.id }, select: { id: true, nombre: true, correo: true } });
      res.status(201).json({
        data: {
          user: { id: user.id, nombre: user.nombre, email: user.correo, role: "cliente" },
          token: makeToken(user.id, "cliente"),
        },
      });
    } catch (error) { next(error); }
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const input = credentials(req.body);
      if (!input) { res.status(400).json({ error: { message: "Email y contraseña válidos son requeridos" } }); return; }
      const user = await prisma.usuarios.findUnique({ where: { correo: input.email }, include: { roles: { select: { nombre: true } } } });
      if (!user || !user.activo || !(await bcrypt.compare(input.password, user.password_hash))) {
        res.status(401).json({ error: { message: "Credenciales inválidas" } }); return;
      }
      if (!isRole(user.roles.nombre)) {
        res.status(403).json({ error: { message: "El usuario no tiene un rol válido" } });
        return;
      }
      const role = user.roles.nombre;
      res.status(200).json({ data: { user: { id: user.id, nombre: user.nombre, email: user.correo, role }, token: makeToken(user.id, role) } });
    } catch (error) { next(error); }
  }
}

export const authController = new AuthController();
