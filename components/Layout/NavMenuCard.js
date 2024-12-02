"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function NavMenuCard({ customStyle }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Animation for the nav items
  useGSAP(() => {
    gsap.to(".header-nav-items", {
      y: 0,
      duration: 1.5,
      opacity: 1,
      duration: 1,
      ease: "power1.out",
      stagger: 0.2,
    });
    gsap.to("#hire-me", {
      x: 0,
      duration: 4,
      opacity: 1,
      duration: 1,
      ease: "expo.inOut",
    });
  }, []); // Only run once on mount

  // Define navigation links
  const NavLinks = [
    { id: 1, name: "{Home}", path: "/", uniqueId: "home" },
    {
      id: 3,
      name: ".Experience{}",
      path: "/experience",
      uniqueId: "experience",
    },
    { id: 4, name: ".My Projects{}", path: "/projects", uniqueId: "projects" },
  ];

  useEffect(() => {
    // Scroll to the section if a section is passed in the URL
    const section = searchParams.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [searchParams]);

  return (
    <div className={`flex gap-12 max-lg:flex-col ${customStyle}`}>
      <div className="flex overflow-y-hidden items-center gap-30 max-lg:flex-col">
        {NavLinks.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(`/?section=${item.uniqueId}`)}
            className={`${
              item.name === "{Home}" ? "text-btnPrimary" : "text-secondery"
            } header-nav-items translate-y-20 flex items-center text-lg leading-5 cursor-pointer`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <button
        id="hire-me"
        className="translate-x-40 bg-btnPrimary px-4 py-2 hover:bg-btnPrimary/80 rounded-5px text-white text-lg leading-5"
      >
        {".Hire Me{}"}
      </button>
    </div>
  );
}

export default NavMenuCard;
