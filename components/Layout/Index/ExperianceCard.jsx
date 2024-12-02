import BulletPoint from "@/components/Utils/BulletPoint";
import React from "react";

const ExperianceCard = ({ id, position, company, duration, details }) => {
  return (
    <div
      className={`experianceItem-${id} p-5 border border-solid flex flex-col gap-5 border-primary-border rounded-[10px]`}
    >
      <div>
        <div className="flex gap-4">
          <BulletPoint />
          <p className="text-h6 text-lg font-semibold">{position}</p>
        </div>
        <p className="text-primary-border">{company}</p>
        <p className="text-primary-border">{duration}</p>
      </div>
      <hr className="border-primary-border" />
      <p className="text-primary-border">{details}</p>
    </div>
  );
};

export default ExperianceCard;
