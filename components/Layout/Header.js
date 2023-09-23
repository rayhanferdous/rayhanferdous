"use client";
import React from "react";
import NavMenuCard from "./NavMenuCard";
import Image from "next/image";
import HamBurger from "../Svg/HamBurger";
import Container from "./Container";

function Header({ setIsOpen }) {
  return (
    <div className=" bg-primary/90 z-20 sticky top-0 py-2">
      <Container>
        <header className="flex items-center justify-between">
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
      </Container>
    </div>
  );
}

export default Header;
