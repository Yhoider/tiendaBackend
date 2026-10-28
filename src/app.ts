
import express from "express";
import cors from "cors";
import authRoutes from "./interface/routes/auth.routes.js";
import contactRoutes from "./interface/routes/contact.routes.js";
import interactionsRoutes from "./interface/routes/interactions.routes.js";
import productsRoutes from "./interface/routes/products.routes.js";
import recetasRoutes from "./interface/routes/recetas.routes.js";
import { errorMiddleware } from "./interface/middlewares/error.middleware.js";

const app = express();

const frontendUrl = process.env.FRONTEND_URL;
if (!frontendUrl && process.env.NODE_ENV === "production") {
  throw new Error("La variable FRONTEND_URL es obligatoria en producción");
}
const allowedOrigins = [frontendUrl, "http://localhost:3000"]
  .filter((url): url is string => Boolean(url))
  .map((url) => url.replace(/\/$/, ""));

app.use(
  cors({
    origin: allowedOrigins,
  }),
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "FarmaYa API funcionando",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/contacto", contactRoutes);
app.use("/api/medicamentos", productsRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/pedidos", interactionsRoutes);
app.use("/api/recetas", recetasRoutes);

app.use((_req, res) => {
  res.status(404).json({ error: { message: "Ruta no encontrada" } });
});

app.use(errorMiddleware);

export default app;
