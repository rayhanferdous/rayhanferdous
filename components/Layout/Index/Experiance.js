import React from "react";
import ExperianceCard from "./ExperianceCard";
import { experianceData } from "@/data/ExperianceData";

function Experiance() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[1005px] flex flex-col gap-[68px]">
        <div className="text-center">
          <p className="text-secondery text-2xl mb-3.5">Experiance</p>
          <h2 className="text-projectsTitle font-bold text-4xl md:text-56">
            My Professional <br />
            Experiance
          </h2>
        </div>
        <div className="flex max-md:flex-wrap gap-[55px]">
          {experianceData.map((item, index) => (
            <ExperianceCard
              key={index}
              position={item.position}
              company={item.company}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
