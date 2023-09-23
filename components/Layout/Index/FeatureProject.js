import React from "react";
import Rectangle from "../Rectangle";
import TechnologyCard from "./TechnologyCard";
import Link from "next/link";

function FeatureProject({
  flipCard,
  title,
  description,
  image,
  technologies,
  live_preview,
}) {
  return (
    <div
      data-aos={flipCard ? "fade-right" : "fade-left"}
      className={`${
        flipCard ? "lg:flex-row-reverse justify-end " : "justify-between"
      } h-625 rounded-20px p-8 md:p-60px flex items-center max-md:flex-col gap-20 bg-cardBg relative overflow-hidden`}
    >
      <div className="flex flex-col gap-16 w-full md+:w-590">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-secondery text-2xl leading-6">
                Featured Project
              </p>
              <h2 className="font-bold text-4xl md:text-56 text-btnPrimary">
                {title}
              </h2>
            </div>
            <p className="text-base leading-7 text-secondery">{description}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-poppins text-lg text-white">
              Technology use for this project:
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              {technologies.map((item, index) => (
                <TechnologyCard key={index} title={item} />
              ))}
            </div>
          </div>
        </div>
        <Link href={live_preview} target="_blank">
          <button className="bg-btnPrimary w-fit px-30 py-18 rounded-lg text-white text-lg leading-5 flex items-center gap-4">
            Live Preview
          </button>
        </Link>
      </div>
      <img
        src={image}
        alt="rayhan_ferdous"
        className="rounded-20px h-530px object-cover object-top w-514px bg-cardBgSecondery"
      />
      <Rectangle className={"-top-[10%] -left-[70%]"} />
    </div>
  );
}

export default FeatureProject;
