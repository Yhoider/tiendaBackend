
import type { ErrorRequestHandler } from "express";
import { Prisma } from "../../generated/prisma/client.js";

export const errorMiddleware: ErrorRequestHandler = (
  error,
  _req,
  res,
  _next,
) => {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      res.status(409).json({ error: { message: "El registro ya existe" } });
      return;
    }
    if (error.code === "P2003") {
      res.status(400).json({ error: { message: "Referencia inválida" } });
      return;
    }
    if (error.code === "P2025") {
      res.status(404).json({ error: { message: "Registro no encontrado" } });
      return;
    }
  }

  if (process.env.NODE_ENV !== "test") console.error(error);

  const status =
    typeof error?.statusCode === "number" ? error.statusCode :
    typeof error?.status === "number" ? error.status : 500;

  const message =
    status === 500
      ? "Error interno del servidor"
      : error.message;

  res.status(status).json({
    error: {
      message,
    },
  });
};
