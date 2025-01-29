import { Router } from "express";
import {
  createAutor,
  deleteAutor,
  editAutor,
  getAutor,
  getAutores,
} from "../controllers/autores.controller.js";

const router = Router();

//GET
router.get("/autores", getAutores);
router.get("/autores/:id", getAutor);

//POST
router.post("/autores", createAutor);
//PUT editar todos los valores
router.put("/autores/:id", editAutor);
//DELETE
router.delete("/autores/:id", deleteAutor);

export default router;
