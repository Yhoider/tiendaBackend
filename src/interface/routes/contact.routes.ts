import { Router } from "express";
import { contactController } from "../controllers/contact.controller.js";

const router = Router();

router.post("/", (req, res, next) => contactController.crear(req, res, next));

export default router;
