import { experianceData } from "@/data/ExperianceData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ExperianceCard from "./ExperianceCard";

function Experiance() {
  useGSAP(() => {
    gsap.fromTo(
      ".experiance-title",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: `.experiance-title`,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      }
    );
    experianceData.forEach((_, index) => {
      gsap.fromTo(
        `.experianceItem-${index}`,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power1.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: `.experianceItem-${index}`,
            start: "top 90%",
            end: "bottom 100%",
            scrub: true,
            markers: true,
          },
        }
      );
    });
  }, []);
  return (
    <div id="experience" className="w-full flex items-center justify-center">
      <div className="w-[1005px] flex flex-col gap-[68px]">
        <div className="text-center experiance-title">
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
              id={index}
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
