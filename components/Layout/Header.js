"use client";
import React from "react";
import NavMenuCard from "./NavMenuCard";
import Image from "next/image";
import HamBurger from "../Svg/HamBurger";
import Container from "./Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Header({ setIsOpen }) {
  useGSAP(() => {
    gsap.to("#header_logo", {
      y: 0,
      duration: 1.5,
      ease: "circ.out",
    });
  }, []);
  return (
    <div className="backdrop-blur-sm bg-primary/80 z-20 sticky top-0 py-2">
      <Container>
        <header className="flex items-center justify-between">
          <Image
            id="header_logo"
            src={"/assets/logo.png"}
            width={65}
            height={36}
            className="-translate-y-11"
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
