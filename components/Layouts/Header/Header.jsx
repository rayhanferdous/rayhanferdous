import React from "react";
import Container from "../Container";

const Header = () => {
  return (
    <header className="bg-black">
      <Container>
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="Logo" className="h-8" />
          </div>
          <nav>
            <ul className="flex items-center space-x-6">
              <li className="text-gray-600 hover:text-gray-900">Home</li>
              <li className="text-gray-600 hover:text-gray-900">Projects</li>
              <li className="text-gray-600 hover:text-gray-900">Skills</li>
              <li className="text-gray-600 hover:text-gray-900">Contact</li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
