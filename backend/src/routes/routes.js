import { Router } from "express";
import EstabController from "../controllers/EstabController";

const router = Router();

router.get("/", EstabController.listarEstabs);
router.get("/estab/:id", EstabController.listarEstab);
router.post("/admin/add", EstabController.criarEstab);
router.put("/admin/update/:id", EstabController.atualizarEstab);
router.delete("/admin/delete/:id", EstabController.deletarEstab);



export { router };
