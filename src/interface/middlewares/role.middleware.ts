import type { RequestHandler } from "express";
import type { Role } from "../../domain/rol.js";

export const autorizar = (...rolesPermitidos: Role[]): RequestHandler =>
  (req, res, next) => {
    if (!req.user || !rolesPermitidos.includes(req.user.role)) {
      res.status(403).json({ error: { message: "No tienes permisos para esta acción" } });
      return;
    }
    next();
  };

export const soloAdmin = autorizar("admin");
export const supervisorOAdmin = autorizar("supervisor", "admin");
