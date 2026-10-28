import { Router } from "express";
import { interactionsController } from "../controllers/interactions.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { soloAdmin } from "../middlewares/role.middleware.js";

const router = Router();
router.use(authenticate);
router.post("/", (req, res, next) => interactionsController.crear(req, res, next));
router.get("/mias", (req, res, next) => interactionsController.mias(req, res, next));
router.get("/", soloAdmin, (req, res, next) => interactionsController.listar(req, res, next));
export default router;
