import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../utils";
import Button from "../atoms/Button";
import CaretDown from "../atoms/vectors/CaretDown";
import CartIcon from "../atoms/vectors/CartIcon";
import Top from "../atoms/vectors/Top";
import SearchInput from "../molecules/SearchInput";
import SelectSearchInput from "../molecules/SelectSearchInput";
import SellWoo from "../molecules/SellWoo";

const HomeNav = () => {
  const {
    cartReducer: { cart },
  } = useAppSelector((state) => state);

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
      windowHeight > 500
        ? setStickyClass("fixed top-0 left-0 z-[60]")
        : setStickyClass("relative");
    }
  };
  return (
    <>
      <header className="home-nav">
        <Image src="/vectors/logo.svg" width={38} height={12} alt="logo" />
        <p className="text-white mb-8 ml-10 mt-6">Movies</p>
        <h1 className="text-white text-[4.68rem]">MY NAME IS TAYO</h1>
        <div className="flex items-center gap-3">
          <Top />
          <span className="text-[#ED1C24] font-bold">#1 in woozeee today</span>
        </div>
        <div className="flex justify-end gap-4 items-center">
          <Button otherClasses="bg-[#ED1C24] max-w-max text-[11px] mr-8">
            Watch Now
          </Button>
          <Image src="/vectors/speaker.svg" width={30} height={18} alt="logo" />
          <p className="text-white border-l-4 px-4 border-white text-xs">18+</p>
        </div>
      </header>
      <section className="py-4 bg-[#F5F5F5] px-[6rem]">
        <SellWoo homeSell />
      </section>
      <nav className={`home-nav ${stickyClass}`}>
        <Image src="/vectors/logo3.svg" width={232} height={80} alt="logo" />
        <form action="">
          <SelectSearchInput placeholder="Search categories, brands, products " />
          <Button otherClasses="bg-[#ED1C24] max-w-max">Search</Button>
        </form>
        <div className="user">
          <p>Welcome</p>
          <h2 className="flex items-center">
            Okemena <CaretDown />
          </h2>
        </div>
        <Link href="/cart">
          <a className="flex items-center mx-4">
            <span className="relative">
              <CartIcon />
              <span className="absolute -top-4 -right-2 bg-[#FF5659] rounded-full h-5 w-5 flex items-center justify-center text-xs text-white">
                {cart?.length}
              </span>
            </span>
            Cart
          </a>
        </Link>
      </nav>
    </>
  );
};

export default HomeNav;
