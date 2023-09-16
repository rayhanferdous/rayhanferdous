import React, { Children } from "react";

function GapContainer({ children }) {
  return <div className="flex flex-col mt-40 gap-24">{children}</div>;
}

export default GapContainer;
