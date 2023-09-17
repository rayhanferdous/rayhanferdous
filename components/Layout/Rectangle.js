import React from "react";

function Rectangle({ className }) {
  return (
    <div
      className={`${className} w-702 h-702 rounded-full bg-btnPrimary -z-[1] blur-240 absolute opacity-70`}
    ></div>
  );
}

export default Rectangle;
