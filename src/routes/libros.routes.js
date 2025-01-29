import { Router } from "express";
import {
  createLibros,
  deleteLibro,
  editLibros,
  getLibro,
  getLibros,
} from "../controllers/libros.controller.js";
const router = Router();

//GET
router.get("/libros", getLibros);

router.get("/libros/:id", getLibro);

//POST
router.post("/libros", createLibros);
//PATCH - editar parcialmente
router.patch("/libros/:id", editLibros);
//DELETE
router.delete("/libros/:id", deleteLibro);

export default router;
