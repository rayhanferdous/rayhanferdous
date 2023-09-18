import React from "react";

const BulletPoint = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="w-14px h-14px rounded-full bg-btnPrimary opacity-50 blur-8px absolute"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-btnPrimary absolute"></div>
    </div>
  );
};

export default BulletPoint;
