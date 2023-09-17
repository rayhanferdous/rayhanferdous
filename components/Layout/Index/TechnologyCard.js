import BulletPoint from "@/components/Utils/BulletPoint";
import React from "react";

function TechnologyCard({ title }) {
  return (
    <div className="flex items-center gap-6">
      <BulletPoint />
      <p className="text-lg text-secondery">{title}</p>
    </div>
  );
}

export default TechnologyCard;
