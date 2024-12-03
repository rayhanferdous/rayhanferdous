import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Rectangle from "../Rectangle";
import FollowMe from "./FollowMe";
import FooterInfoItem from "./FooterInfoItem";

function Footer() {
  useGSAP(() => {
    gsap.fromTo(
      ".footer-top",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: ".footer-top",
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.to(".footer-info-item", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      stagger: 0.2,
    });
  });

  return (
    <footer className="relative">
      <div className="footer-top flex items-center flex-col mb-10 md:mb-[129px]">
        <h2 className="font-bold text-4xl md:text-4xl text-projectsTitle mb-4">
          Let’s Talk About Projects
        </h2>
        <p className="text-lg text-secondery">
          I am trying to do something better than other websites and developers.{" "}
          <br />I believe in myself, and I can make a valuable contribution to
          your team.
        </p>
      </div>

      <div
        id="contact"
        className="flex flex-wrap lg:items-center justify-between mb-20 gap-5 md:gap-10 lg:flex-row"
      >
        <FooterInfoItem label="Phone" value="+8801686333676" />
        <FooterInfoItem label="Email" value="rayhanferdous8@gmail.com" />
        <div className="footer-info-item translate-y-20 flex flex-wrap gap-6 items-center">
          <p className="text-secondery text-lg">Follow Me:</p>
          <FollowMe />
        </div>
      </div>

      <Rectangle className="-top-[70%] left-0 rounded-r-full" />
    </footer>
  );
}

export default Footer;
