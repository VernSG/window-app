import React, { useState, useEffect } from "react";
import axios from "axios";

// Interface untuk item barang
interface Barang {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
}

export default function BarangCrud() {
  const [barang, setBarang] = useState<Barang[]>([]);
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    price: 0,
    stock: 0,
  });

  // Ambil data barang dari backend
  useEffect(() => {
    axios.get<Barang[]>("/api/barang").then((response) => {
      setBarang(response.data);
    });
  }, []);

  // Menambahkan barang baru
  const handleAdd = () => {
    axios.post<Barang>("/api/barang", newItem).then((response) => {
      setBarang([...barang, response.data]);
      setNewItem({ name: "", category: "", price: 0, stock: 0 });
    });
  };

  // Menghapus barang
  const handleDelete = (id: number) => {
    axios.delete(`/api/barang/${id}`).then(() => {
      setBarang(barang.filter((item) => item.id !== id));
    });
  };

  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-4">Data Barang</h2>
      <div className="flex gap-2 mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          + Insert Data
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Sortir Stok Kurang
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Refresh Data
        </button>
      </div>
      <table className="table-auto w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">No.</th>
            <th className="px-4 py-2">Nama Barang</th>
            <th className="px-4 py-2">Kategori</th>
            <th className="px-4 py-2">Harga</th>
            <th className="px-4 py-2">Stok</th>
            <th className="px-4 py-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {barang.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.category}</td>
              <td className="border px-4 py-2">
                Rp{item.price.toLocaleString("id-ID")},-
              </td>
              <td className="border px-4 py-2">{item.stock}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6">
        <h3 className="text-xl font-bold">Tambah Barang</h3>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            placeholder="Nama Barang"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Kategori"
            value={newItem.category}
            onChange={(e) =>
              setNewItem({ ...newItem, category: e.target.value })
            }
            className="border px-4 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Harga"
            value={newItem.price}
            onChange={(e) => setNewItem({ ...newItem, price: +e.target.value })}
            className="border px-4 py-2 rounded"
          />
          <input
            type="number"
            placeholder="Stok"
            value={newItem.stock}
            onChange={(e) => setNewItem({ ...newItem, stock: +e.target.value })}
            className="border px-4 py-2 rounded"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
}
