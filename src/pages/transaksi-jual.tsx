import React, { useState } from "react";

// Definisikan tipe untuk item barang
type Item = {
  name: string;
  price: number;
  quantity: number;
};

export default function TransaksiPenjualan() {
  // Gunakan tipe eksplisit untuk items
  const [items, setItems] = useState<Item[]>([
    { name: "", price: 0, quantity: 1 },
  ]);
  const [payment, setPayment] = useState<number>(0);

  const handleAddItem = () => {
    setItems([...items, { name: "", price: 0, quantity: 1 }]);
  };

  const handleTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  // Solusi: Pastikan properti yang dimodifikasi adalah tipe yang valid
  const handleChange = (
    index: number,
    key: keyof Item,
    value: string | number
  ) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      )
    );
  };

  return (
    <div>
      <h2>Transaksi Penjualan</h2>
      {items.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Nama Barang"
            value={item.name}
            onChange={(e) => handleChange(index, "name", e.target.value)}
          />
          <input
            type="number"
            placeholder="Harga"
            value={item.price}
            onChange={(e) => handleChange(index, "price", +e.target.value)}
          />
          <input
            type="number"
            placeholder="Jumlah"
            value={item.quantity}
            onChange={(e) => handleChange(index, "quantity", +e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleAddItem}>Tambah Barang</button>
      <h3>Total: {handleTotal()}</h3>
      <input
        type="number"
        placeholder="Pembayaran"
        value={payment}
        onChange={(e) => setPayment(+e.target.value)}
      />
      <h3>Kembalian: {payment - handleTotal()}</h3>
    </div>
  );
}
