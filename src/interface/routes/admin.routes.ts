import { Router } from "express";
import { adminController } from "../controllers/admin.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { soloAdmin } from "../middlewares/role.middleware.js";

const router = Router();
router.use(authenticate, soloAdmin);
router.get("/usuarios", (req, res, next) => adminController.listarUsuarios(req, res, next));
router.post("/usuarios", (req, res, next) => adminController.crearUsuario(req, res, next));
router.get("/recetas", (req, res, next) => adminController.listarRecetas(req, res, next));
router.patch("/recetas/:id", (req, res, next) => adminController.decidirReceta(req, res, next));

export default router;
