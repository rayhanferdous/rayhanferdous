import DocumentSvg from "@/components/Svg/DocumentSvg";
import React from "react";
import Rectangle from "../Rectangle";
import { stakData } from "@/data/StackData";
import Image from "next/image";

function Hero() {
  return (
    <div
      id="home"
      className="flex items-center flex-col xl:flex-row xl:justify-between gap-6 relative"
    >
      <Rectangle className={"-top-[10%] -left-[15%] rounded-r-full"} />
      <div
        data-aos={"fade-right"}
        className="flex flex-col gap-16 max-sm:mt-16 sm:mt-40 justify-center items-center xl:justify-start xl:items-start"
      >
        <div className="flex flex-col gap-10 justify-center items-center xl:justify-start xl:items-start">
          <div className="flex flex-col gap-4 md:gap-10 justify-center items-center xl:justify-start xl:items-start">
            <div className="flex flex-col gap-6 max-sm:self-start">
              <div className="font-bold text-2xl md:text-4xl text-white">
                <h3 className="font-medium text-2xl md:text-4xl mb-4">
                  Hello! ✋
                </h3>
                <h3>I am Rayhan Ferdous</h3>
              </div>
              <h2 className="font-bold text-56 text-btnPrimary">
                {/* <ReactTyped
                  loop
                  strings={[
                    "Full Stack Developer",
                    "React.Js Developer",
                    "Next.Js Developer",
                  ]}
                  typeSpeed={40}
                /> */}
              </h2>
            </div>
            <p className="text-lg text-secondery md:w-8/12 xl:w-full">
              I work as a full stack (mostly backend) engineer, work on
              end-to-end of features and help other engineers to get things done
              FAST. Need consultation ?
            </p>
          </div>
          <button className="bg-btnPrimary w-fit px-30 py-18 rounded-lg text-white text-lg leading-5 flex items-center gap-4">
            <p>Get Resume</p>
            <DocumentSvg />
          </button>
        </div>
        {/* <div className="w-546 grid grid-cols-3 xl:grid-cols-6 gap-16">
            {stakData.map((item) => (
              <Image
                width={40}
                height={40}
                src={item.img}
                alt={item.alt}
                key={item.id}
              />
            ))}
          </div> */}
      </div>
      <img
        data-aos={"fade-left"}
        className="w-[636px]"
        src="/assets/hero/model.png"
        alt=""
      />
      <Rectangle className={"-bottom-[15%] right-0 rounded-l-full"} />
    </div>
  );
}

export default Hero;
