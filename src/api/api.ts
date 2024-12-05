import express, { Request, Response } from "express";
import db from "../../database";

const app = express();
app.use(express.json());

app.get("/api/barang", (req: Request, res: Response) => {
  const barang = db.prepare("SELECT * FROM barang").all();
  res.json(barang);
});

app.post("/api/barang", (req: Request, res: Response) => {
  const { name, category, price, stock } = req.body;
  const stmt = db.prepare(
    "INSERT INTO barang (name, category, price, stock) VALUES (?, ?, ?, ?)"
  );
  const result = stmt.run(name, category, price, stock);
  res.json({ id: result.lastInsertRowid, name, category, price, stock });
});

app.delete("/api/barang/:id", (req: Request, res: Response) => {
  const stmt = db.prepare("DELETE FROM barang WHERE id = ?");
  stmt.run(req.params.id);
  res.sendStatus(200);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
