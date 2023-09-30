"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

function NavMenuCard({ customStyle }) {
  // const NavLinks = ["{Home}", ".About Me{}", ".Experience{}", ".My Projects{}"];
  const NavLinks = [
    { id: 1, name: "{Home}", path: "/", uniqueId: "home" },
    // { id: 2, name: ".About Me{}", path: "/about", uniqueId: "about" },
    {
      id: 3,
      name: ".Experience{}",
      path: "/experience",
      uniqueId: "experience",
    },
    { id: 4, name: ".My Projects{}", path: "/projects", uniqueId: "projects" },
  ];
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const element = document.getElementById(section);
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [searchParams]);

  return (
    <div className={`flex gap-12 max-lg:flex-col ${customStyle}`}>
      <div className="flex items-center gap-30 max-lg:flex-col">
        {NavLinks.map((item, index) => (
          <div
            key={index}
            onClick={() => router.push(`/?section=${item.uniqueId}`)}
            className={`${
              item == "{ Home }" ? "text-btnPrimary" : "text-secondery"
            } flex items-center text-lg leading-5 cursor-pointer`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <button className="bg-btnPrimary px-4 py-2 hover:bg-btnPrimary/80 rounded-5px text-white  text-lg leading-5">
        {".Hire Me{}"}
      </button>
    </div>
  );
}

export default NavMenuCard;
