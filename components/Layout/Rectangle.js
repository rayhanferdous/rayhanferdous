import React from "react";

function Rectangle({ className }) {
  return (
    <div
      className={`${className} max-md:hidden w-702 h-702 bg-btnPrimary blur-240 -z-[1] absolute opacity-70`}
    ></div>
  );
}

export default Rectangle;
