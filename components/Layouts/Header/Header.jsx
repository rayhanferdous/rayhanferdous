import React from "react";
import Container from "../Container";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-black">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Image
              width={70}
              height={32}
              src="/assets/logo.png"
              alt="Logo"
              className="h-8"
            />
          </div>
          <nav>
            <ul className="flex items-center space-x-6 text-white">
              <li className="cursor-pointer hover:text-white/90">Home</li>
              <li className="cursor-pointer hover:text-white/90">Experiances</li>
              <li className="cursor-pointer hover:text-white/90">Projects</li>
              <li className="cursor-pointer hover:text-white/90">Skills</li>
              <li className="cursor-pointer hover:text-white/90">Contact</li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
