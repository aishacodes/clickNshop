import Image from "next/image";
import React, { ReactElement, useEffect, useState } from "react";
import Star from "../atoms/vectors/Star";
import SellWoo from "../molecules/SellWoo";
import NavBar from "../organisms/NavBar";

const Layout = ({ children }: { children: ReactElement }) => {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300
        ? setStickyClass("fixed top-0 left-0 z-50")
        : setStickyClass("relative");
    }
  };
  return (
    <main className="Layout">
      <header className="black-friday">
        <div className="line" />
        <Image src="/images/calendar.png" width={58} height={58} />
        <Image src="/images/black-friday.png" width={548} height={58} />
        <Image src="/images/calendar.png" width={58} height={58} />
        <div className="line" />
      </header>
      <section className="mx-[10.625rem]">
        <SellWoo homeSell={false} />
      </section>
      <div className={`w-full ${stickyClass}`}>
        <NavBar />
      </div>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
