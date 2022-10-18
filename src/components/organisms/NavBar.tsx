import Image from "next/image";
import React from "react";
import Menu from "../atoms/vectors/Menu";

const NavBar = () => {
  return (
    <nav className="flex items-center">
      <Menu />
      <Image src="/images/logo2.png" width={140} height={44} />
    </nav>
  );
};

export default NavBar;
