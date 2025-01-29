import { pool } from "../db.js";
/* body
{
 "titulo": "Percy Jackson y el ladron del rayo", 
 "autor_id": 4, 
 "genero": "Ficcion", 
 "paginas": 256, 
 "saga": "Percy Jackson y Los Dioses del Olimpo"
}*/
export const getLibros = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * from libros");
    res.json(rows);
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};

export const getLibro = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * from libros where id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "Libro no encontrado." });
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};

export const createLibros = async (req, res) => {
  try {
    const { titulo, autor_id, genero, paginas, saga } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO libros (titulo, autor_id, genero, paginas, saga) VALUES (?,?,?,?,?)",
      [titulo, autor_id, genero, paginas, saga]
    );
    res.send({
      id: rows.insertId,
      titulo,
      autor_id,
      genero,
      paginas,
      saga,
    });
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};

export const editLibros = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, autor_id, genero, paginas, saga } = req.body;
    const result = await pool.query(
      "UPDATE libros SET titulo = IFNULL(?, titulo), autor_id =  IFNULL(?, autor_id), genero = IFNULL(?, genero), paginas =  IFNULL(?, paginas), saga =  IFNULL(?, saga) Where id = ?",
      [titulo, autor_id, genero, paginas, saga, id]
    );
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "libro no encontrado." });
    const [rows] = await pool.query("SELECT * FROM libros WHERE id = ?", [id]);
    res.json(rows[0]);
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};

export const deleteLibro = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE from libros where id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Autor no encontrado." });
    res.sendStatus(204);
  } catch (error) {
    res.sendStatus(500).json({ message: "something went wrong" });
  }
};
