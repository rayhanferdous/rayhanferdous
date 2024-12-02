import FiverrSvg from "@/components/Svg/FiverrSvg";
import { GithubSvg } from "@/components/Svg/GithubSvg";
import { LinkedInSvg } from "@/components/Svg/LinkedInSvg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import Rectangle from "../Rectangle";

function Footer() {
  useGSAP(() => {
    gsap.fromTo(
      ".footer-top",
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
          trigger: `.footer-top`,
          start: "top 80%",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.to(".footer-info-item", {
      y: 0,
      duration: 1.5,
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      stagger: 0.2,
    });
  });
  return (
    <footer className="relative">
      <div className="footer-top flex justify-between lg:items-center gap-10 mb-10 md:mb-[129px] flex-col lg:flex-row ">
        <div className="flex flex-col">
          <h2 className="font-bold text-4xl md:text-4xl text-projectsTitle mb-4">
            Let’s Talk About Projects
          </h2>
          <p className="text-lg text-secondery">
            I am trying to somthing is better then other websites and
            developers. <br />I believe on myself, I can make a valuable
            contribution to your team.
          </p>
        </div>
        <button className="bg-btnPrimary hover:bg-btnPrimary/80 w-fit px-4 py-2 rounded-lg text-white text-lg leading-5 flex items-center gap-4">
          <p>Get In Touch</p>
        </button>
      </div>
      <div className="flex flex-wrap lg:items-center justify-between mb-20 gap-5 md:gap-10 lg:flex-row ">
        <div className="footer-info-item translate-y-20 flex flex-col gap-1.5">
          <p className="text-secondery text-lg">Phone</p>
          <p className="font-medium text-xl text-white">+8801686333676</p>
        </div>
        <div className="footer-info-item translate-y-20 flex flex-col gap-1.5">
          <p className="text-secondery text-lg">Email</p>
          <p className="font-medium text-xl text-white">
            rayhanferdous8@gmail.com
          </p>
        </div>
        <div className="footer-info-item translate-y-20 flex flex-wrap gap-6 items-center">
          <p className="text-secondery text-lg">Follow Me:</p>
          <div className="flex gap-9 items-center bg-cardBg px-9 py-4 rounded-5px">
            <Link href={"https://github.com/rayhanferdous"} target="_blank">
              <GithubSvg />
            </Link>
            <Link
              href={"https://bd.linkedin.com/in/therayhanferdous"}
              target="_blank"
            >
              <LinkedInSvg />
            </Link>
            {/* <TwitterSvg /> */}
            <Link href={"https://www.fiverr.com/therayhan"} target="_blank">
              <FiverrSvg />
            </Link>
          </div>
        </div>
      </div>
      <Rectangle className={"-top-[70%] left-0 rounded-r-full"} />
    </footer>
  );
}

export default Footer;
