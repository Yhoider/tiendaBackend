import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { isRole } from "../../domain/rol.js";

const jwtSecret = (): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("La variable JWT_SECRET no está definida");
  return secret;
};

export const authenticate: RequestHandler = (req, res, next) => {
  const [scheme, token] = req.headers.authorization?.split(" ") ?? [];
  if (scheme !== "Bearer" || !token) {
    res.status(401).json({ error: { message: "Token de autenticación requerido" } });
    return;
  }

  try {
    const payload = jwt.verify(token, jwtSecret());
    if (
      typeof payload === "string" ||
      typeof payload.id !== "string" ||
      !isRole(payload.role)
    ) {
      res.status(401).json({ error: { message: "Token inválido" } });
      return;
    }
    req.user = { id: payload.id, role: payload.role };
    next();
  } catch {
    res.status(401).json({ error: { message: "Token inválido o expirado" } });
  }
};
