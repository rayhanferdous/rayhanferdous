import React from "react";

function Container({ children }) {
  return (
    <div className="w-full overflow-x-hidden px-3 md:px-9 xl:px-0 xl:w-1440 xl:mx-auto flex flex-col">
      {children}
    </div>
  );
}

export default Container;
