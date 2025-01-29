import { pool } from "../db.js";
/* body 
{
  "nombre": "Rick Riordan",
  "nacionalidad": "Estadounidense",
  "sexo": "Masculino"
} */
export const getAutores = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * from autores");
    res.json(rows);
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};

export const getAutor = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * from autores where id = ?", [
      req.params.id,
    ]);

    if (rows.length <= 0)
      return res.status(404).json({ message: "Autor no encontrado." });
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};

export const createAutor = async (req, res) => {
  try {
    const { nombre, nacionalidad, sexo } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO autores (nombre, nacionalidad, sexo) VALUES (?,?,?)",
      [nombre, nacionalidad, sexo]
    );
    res.send({
      id: rows.insertId,
      nombre,
      nacionalidad,
      sexo,
    });
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};

export const editAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, nacionalidad, sexo } = req.body;
    const result = await pool.query(
      "UPDATE autores SET nombre = ?, nacionalidad = ?, sexo = ? Where id = ?",
      [nombre, nacionalidad, sexo, id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Autor no encontrado." });
    const [rows] = await pool.query("SELECT * FROM autores WHERE id = ?", [id]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};

export const deleteAutor = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE from autores where id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Autor no encontrado." });
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};
