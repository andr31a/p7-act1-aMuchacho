import express from "express";
import librosRoutes from "./libros.routes.js";
import autoresRoutes from "./autores.routes.js";
import { PORT } from "../config.js";

const app = express();

app.use(express.json());

app.use("/api", librosRoutes);
app.use("/api", autoresRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint Not Found",
  });
});

export default app;
