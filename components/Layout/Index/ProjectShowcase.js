import { projectShowcaseData } from "@/data/ProjectShowcaseData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Rectangle from "../Rectangle";
import ProjectShowcaseCard from "./ProjectShowcaseCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ProjectShowcase() {
  useGSAP(() => {
    // Apply ScrollTrigger to each project item
    gsap.fromTo(
      ".project-showcase-title",
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
          trigger: `.project-showcase-title`,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      }
    );
    projectShowcaseData.forEach((_, index) => {
      gsap.fromTo(
        `.projectItem-${index}`,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: `.projectItem-${index}`,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div id="projects" className="relative">
      <div className="mb-12 project-showcase-title">
        <h2 className="text-projectsTitle font-bold text-4xl xl:text-[56px] mb-4">
          My Projects
        </h2>
        <p className="text-secondery text-lg">
          Here is some of my projects. I am trying to create something better
          than other websites and developers. That's why I used modern
          technologies in these websites.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2" id="projects">
        {projectShowcaseData.map((item, index) => (
          <div className={`projectItem-${index}`} key={index}>
            <ProjectShowcaseCard
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              stack={item.stack}
              livepreview={item.livepreview}
              get_code={item.get_code}
            />
          </div>
        ))}
      </div>
      <Rectangle className={"top-[25%] right-0 rounded-l-full"} />
    </div>
  );
}

export default ProjectShowcase;
