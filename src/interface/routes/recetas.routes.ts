import { Router, raw } from "express";
import { recetasController } from "../controllers/recetas.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/:id/archivo", authenticate, (req, res, next) => recetasController.archivo(req, res, next));
router.post(
  "/",
  authenticate,
  raw({ type: ["application/pdf", "image/jpeg", "image/png"], limit: "5mb" }),
  (req, res, next) => recetasController.crear(req, res, next),
);

export default router;
