"use client";

import { useState, useEffect } from "react";
import { Item } from "@/types/items";

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState<string>("");

  useEffect(() => {
    fetch("/api/items/read")
      .then((res) => res.json())
      .then((data: Item[]) => setItems(data));
  }, []);

  const addItem = async () => {
    await fetch("/api/items/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newItem }),
    });
    setNewItem("");
    location.reload();
  };

  return (
    <div>
      <h1>CRUD with Next.js + MongoDB (TS)</h1>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="New item"
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
