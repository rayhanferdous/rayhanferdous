import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Rectangle from "../Rectangle";
import TechnologyCard from "./TechnologyCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FeatureProject({
  flipCard,
  title,
  description,
  image,
  technologies,
  live_preview,
}) {
  useGSAP(() => {
    gsap.to(flipCard ? ".featureProjectTextTop" : ".featureProjectTextBottom", {
      x: 0,
      duration: 1.5,
      opacity: 1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: flipCard
          ? ".featureProjectTextTop"
          : ".featureProjectTextBottom",
        start: "top 70%",
        end: "top 40%",
        scrub: true,
        markers: false,
      },
    });
    gsap.to(
      flipCard ? ".featureProjectImageTop" : ".featureProjectImageBottom",
      {
        x: 0,
        duration: 1.5,
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: flipCard
            ? ".featureProjectImageTop"
            : ".featureProjectImageBottom",
          start: "top 70%",
          end: "top 40%",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);
  return (
    <div
      className={`${
        flipCard ? "lg:flex-row-reverse justify-end " : "justify-between"
      } h-625 rounded-20px p-8 md:p-60px flex items-center max-md:flex-col gap-20 bg-cardBg relative overflow-hidden`}
    >
      <div
        className={`flex flex-col gap-16 w-full md:w-590 ${
          flipCard
            ? "translate-x-[800px] featureProjectTextTop"
            : "-translate-x-[800px] featureProjectTextBottom"
        }`}
      >
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
      <Image
        width={514}
        height={530}
        src={image}
        alt="rayhan_ferdous"
        className={`${
          flipCard
            ? "-translate-x-[600px] featureProjectImageTop"
            : "translate-x-[400px] featureProjectImageBottom"
        } rounded-20px h-530px object-cover object-top w-514px bg-cardBgSecondery`}
      />
      <Rectangle className={"-top-[10%] -left-[70%]"} />
    </div>
  );
}

export default FeatureProject;
