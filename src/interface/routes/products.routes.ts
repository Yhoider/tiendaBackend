import { Router } from "express";
import { productsController } from "../controllers/products.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { soloAdmin } from "../middlewares/role.middleware.js";

const router = Router();

router.get("/", (req, res, next) =>
  productsController.listar(req, res, next),
);

router.get("/:id", (req, res, next) =>
  productsController.buscarPorId(req, res, next),
);

router.post("/", authenticate, soloAdmin, (req, res, next) => productsController.crear(req, res, next));
router.put("/:id", authenticate, soloAdmin, (req, res, next) => productsController.actualizar(req, res, next));
router.delete("/:id", authenticate, soloAdmin, (req, res, next) => productsController.eliminar(req, res, next));

export default router;
