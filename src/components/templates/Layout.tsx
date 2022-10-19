import Image from "next/image";
import React, { ReactElement } from "react";
import Star from "../../../public/vectors/Star";
import NavBar from "../organisms/NavBar";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <main className="Layout">
      <header className="black-friday">
        <div className="line" />
        <Image src="/images/calendar.png" width={58} height={58} />
        <Image src="/images/black-friday.png" width={548} height={58} />
        <Image src="/images/calendar.png" width={58} height={58} />
        <div className="line" />
      </header>
      <div className="sell">
        <div className="flex items-center gap-[5px]">
          <Star />
          <p>Sell on woozeee</p>
        </div>
        <div className="links">
          <Image src="/images/logo1.png" width={70} height={70} />
        </div>
        <p />
      </div>
      <NavBar />
      <div className="overflow-y-auto">{children}</div>
    </main>
  );
};

export default Layout;
