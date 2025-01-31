import express from "express";
import librosRoutes from "./libros.routes.js";
import autoresRoutes from "./autores.routes.js";
import { fileURLToPath } from "url";
import path from "path";

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", librosRoutes);
app.use("/api", autoresRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint Not Found" });
});

export default app;
