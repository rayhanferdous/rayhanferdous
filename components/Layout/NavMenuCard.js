import React from "react";

function NavMenuCard({ customStyle }) {
  const NavLinks = ["{Home}", ".About Me{}", ".Experience{}", ".My Projects{}"];
  return (
    <div className={`flex gap-12 max-lg:flex-col ${customStyle}`}>
      <div className="flex items-center gap-30 max-lg:flex-col">
        {NavLinks.map((item, index) => (
          <div
            key={index}
            className={`${
              item == "{ Home }" ? "text-btnPrimary" : "text-secondery"
            } flex items-center  text-lg leading-5`}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="bg-btnPrimary px-4 py-2 rounded-5px text-white  text-lg leading-5">
        {".Hire Me{}"}
      </button>
    </div>
  );
}

export default NavMenuCard;
