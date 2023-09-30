import React, { Children } from "react";

function GapContainer({ children }) {
  return <div className="flex flex-col mt-6 xl:mt-40 gap-6 xl:gap-24">{children}</div>;
}

export default GapContainer;
