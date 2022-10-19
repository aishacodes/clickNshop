import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAppSelector } from "../../utils";
import Button from "../atoms/Button";
import CartIcon from "../atoms/vectors/CartIcon";
import Menu from "../atoms/vectors/Menu";
import SearchInput from "../molecules/SearchInput";

const NavBar = () => {
  const {
    cartReducer: { cart },
  } = useAppSelector((state) => state);
  return (
    <nav>
      <Menu />
      <span className="logo">
        <Image src="/images/logo2.png" width={140} height={44} />
      </span>
      <div className="flex-grow flex gap-2 mx-6">
        <SearchInput placeholder="Search products, brands and categories" />
        <Button otherClasses="max-w-max">Search</Button>
      </div>
      <div className="flex items-center gap-2 mx-4">
        <span>Hi, Bukky</span>
        <Image src="/vectors/caret-down.svg" width={15} height={15} />
      </div>
      <div className="flex items-center gap-2 mx-4">
        <span>Help</span>
        <Image src="/vectors/caret-down.svg" width={15} height={15} />
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
  );
};

export default NavBar;
