"use client";
import React from "react";
import NavMenuCard from "./NavMenuCard";
import Image from "next/image";
import HamBurger from "../Svg/HamBurger";

function Header({ setIsOpen }) {
  return (
    <>
      <header className="flex items-center justify-between pt-7 z-10 sticky top-0">
        <Image
          src={"/assets/logo.png"}
          width={70}
          height={32}
          alt="rayhan-ferdous"
        />
        <NavMenuCard customStyle={"max-lg:hidden"} />
        <div onClick={setIsOpen} className="lg:hidden">
          <HamBurger />
        </div>
      </header>
    </>
  );
}

export default Header;
