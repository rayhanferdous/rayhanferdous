import React from "react";
import Rectangle from "../Rectangle";
import ProjectShowcaseCard from "./ProjectShowcaseCard";
import { projectShowcaseData } from "@/data/ProjectShowcaseData";

function ProjectShowcase() {
  return (
    <div className="relative">
      <div className="mb-12">
        <h2 className="text-projectsTitle font-bold text-4xl xl:text-[56px] mb-4">
          My Projects
        </h2>
        <p className="text-secondery text-lg">
          Here is my some project. I am trying to somthing is better then other
          websites and <br /> developers. Thats why I used modern technology in
          those websites.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 ">
        {projectShowcaseData.map((item, index) => (
          <ProjectShowcaseCard
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            stack={item.stack}
            livepreview={item.livepreview}
            get_code={item.get_code}
          />
        ))}
      </div>
      {/* <div className="flex items-center justify-center">
        <button className="w-[138px] py-3 mt-[58px] rounded-[7px] border-2 border-solid border-btnPrimary text-btnPrimary font-medium text-lg">
          See More
        </button>
      </div> */}
      <Rectangle className={"top-[25%] right-0 rounded-l-full"} />
    </div>
  );
}

export default ProjectShowcase;
