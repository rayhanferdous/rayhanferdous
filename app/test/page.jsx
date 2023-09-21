"use client";
import Items from "@/components/Items";
import React, { useEffect, useState } from "react";

const page = () => {
  const [items, setItem] = useState(["item 1", "item 2", "item 3"]);
  useEffect(() => {
    console.log("New Item added successfully");
  }, [items]);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      <div style={{ width: "50%", margin: "0 auto", padding: "20px" }}>
        <TotalItems item={items} />
        <Items item={items} />
        <AddItem setItem={setItem} />
      </div>
    </div>
  );
};

export default page;

const TotalItems = ({ item }) => {
  return <div>Total Items: {item.length}</div>;
};

const AddItem = ({ setItem }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = e.target[0].value;
    setItem((prevValue) => [...prevValue, item]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input style={{ border: "1px solid #ddd" }} type="text" />
      <input
        style={{ backgroundColor: "black", color: "white" }}
        type="submit"
        value="Submit"
      />
    </form>
  );
};
