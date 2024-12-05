import Database from "better-sqlite3";

const db = new Database("data.db", { verbose: console.log });

db.exec(`
  CREATE TABLE IF NOT EXISTS barang (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT,
    price INTEGER NOT NULL,
    stock INTEGER NOT NULL
  )
`);

export default db;
