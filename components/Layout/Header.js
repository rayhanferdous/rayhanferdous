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
    const tl = gsap.timeline();

    tl.from("#header_logo", {
      y: -44,
      duration: 1,
      ease: "circ.out",
    });
    tl.from(".header-nav-items", {
      y: 80,
      duration: 1,
      ease: "power1.out",
      stagger: 0.2,
    });

    tl.from("#hire-me", {
      x: 1000,
      duration: 1,
      ease: "expo.inOut",
    });
  }, []);
  return (
    <div className="backdrop-blur-sm overflow-x-hidden bg-primary/80 z-20 sticky top-0 py-2">
      <Container>
        <header className="flex items-center justify-between">
          <Image
            id="header_logo"
            src={"/assets/logo.png"}
            width={65}
            height={36}
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
