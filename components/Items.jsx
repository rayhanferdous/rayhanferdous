"use client";
import React, { useState } from "react";

const Items = ({ item }) => {
  return (
    <div>
      {item.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default Items;
