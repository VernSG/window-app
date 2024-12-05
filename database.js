"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var better_sqlite3_1 = require("better-sqlite3");
var db = new better_sqlite3_1.default("data.db", { verbose: console.log });
db.exec("\n  CREATE TABLE IF NOT EXISTS barang (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    category TEXT,\n    price INTEGER NOT NULL,\n    stock INTEGER NOT NULL\n  )\n");
exports.default = db;
