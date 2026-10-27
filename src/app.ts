
import express from "express";
import productsRoutes from "./interface/routes/products.routes.js";
import { errorMiddleware } from "./interface/middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "FarmaYa API funcionando",
  });
});

app.use("/api/products", productsRoutes);

app.use(errorMiddleware);

export default app;
