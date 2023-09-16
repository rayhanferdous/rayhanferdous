import DocumentSvg from "@/components/Svg/DocumentSvg";
import React from "react";
import Rectangle from "../Rectangle";

function Hero() {
  return (
    <div className="flex items-center flex-col xl:flex-row xl:justify-between  relative">
      <div
        data-aos={"fade-right"}
        className="flex flex-col gap-16 mt-40 justify-center items-center xl:justify-start xl:items-start"
      >
        <div className="flex flex-col gap-10 justify-center items-center xl:justify-start xl:items-start">
          <div className="flex flex-col gap-10 justify-center items-center xl:justify-start xl:items-start">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-4xl text-white">
                <span className="font-medium text-4xl mb-4">Hello! ✋</span>{" "}
                <br />I am Rayhan Ferdous
              </h3>
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
            <p className="text-lg text-secondery w-1/2 xl:w-full">
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
        <div className="relative z-10">
          <div className="w-546 grid grid-cols-6 gap-16">
            {Array.from({ length: 24 }, (v, i) => (
              <img src={`/assets/hero/stack/image ${i + 3}.png`} />
            ))}
          </div>
          <div className="absolute w-full h-full top-0 left-0 z-[11] bg-gradient-to-t from-slate-900 from-15% via-slate-900 via-30% to-slate-900/0 to-90% "></div>
        </div>
      </div>
      <img
        data-aos={"fade-left"}
        className="w-[636px]"
        src="/assets/hero/model.png"
        alt=""
      />
      <Rectangle className={"-bottom-[15%] -right-[15%]"} />
    </div>
  );
}

export default Hero;
