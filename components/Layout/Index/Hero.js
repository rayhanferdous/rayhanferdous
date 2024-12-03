import DocumentSvg from "@/components/Svg/DocumentSvg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Rectangle from "../Rectangle";
import { ReactTyped } from "react-typed";
import FollowMe from "./FollowMe";
import { stakData } from "@/data/StackData";
import Image from "next/image";
import { useEffect } from "react";

function Hero() {
  const tl = gsap.timeline({ paused: false });
  useGSAP(() => {
    tl.from("#home", {
      y: 200,
      opacity: 0,
      duration: 1.5,
      ease: "power1.out",
    }).to("#stack", {
      x: "-100%",
      duration: 5,
      repeat: -1,
      ease: "none",
    });
  }, []);

  useEffect(() => {
    const stack = document.getElementById("stack");

    if (stack) {
      stack.addEventListener("mouseover", handleMouseOver);
      stack.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        stack.removeEventListener("mouseover", handleMouseOver);
        stack.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  const handleMouseOver = () => {
    tl.pause();
  };

  const handleMouseLeave = () => {
    tl.play();
  };

  return (
    <>
      <div
        id="home"
        className="flex items-center flex-col xl:flex-row xl:justify-between gap-6 relative"
      >
        <Rectangle className={"-top-[10%] -left-[15%] rounded-r-full"} />
        <div className="flex flex-col gap-16 max-sm:mt-16 sm:mt-40 justify-center items-center xl:justify-start xl:items-start">
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
                  <ReactTyped
                    loop
                    strings={[
                      "Full Stack Developer",
                      "PHP Developer",
                      "Laravel Developer",
                      "React.Js Developer",
                      "Next.Js Developer",
                      "VueJs Developer",
                      "NuxtJs Developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                  />
                </h2>
              </div>
              <div>
                <p className="text-lg text-secondery md:w-8/12 xl:w-full">
                  I work as a full stack (mostly backend) engineer, work on
                  end-to-end features and help other engineers get things done
                  FAST. Need consultation?
                </p>
                <div className="w-fit mt-5 flex flex-wrap items-center justify-between gap-8">
                  <FollowMe />{" "}
                  <button className="bg-btnPrimary w-fit px-30 py-18 rounded-lg text-white text-lg leading-5 flex items-center gap-4">
                    <p>Get Resume</p>
                    <DocumentSvg />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          data-aos={"fade-left"}
          className="w-[636px]"
          src="/assets/hero/model.png"
          alt="Hero Image"
        />
        <Rectangle className={"-bottom-[15%] right-0 rounded-l-full"} />
      </div>
      <div
        id="stack"
        className="w-full my-10 flex flex-shrink-1 items-center gap-16"
      >
        {stakData.map((item) => (
          <Image
            width={40}
            height={40}
            src={item.img}
            alt={item.alt}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default Hero;
