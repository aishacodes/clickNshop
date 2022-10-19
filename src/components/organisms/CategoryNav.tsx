import Image from "next/image";
import React from "react";
import Computer from "../atoms/vectors/Computer";
import PhoneIcon from "../atoms/vectors/PhoneIcon";
import Plug from "./Plug";

const CategoryNAv = () => {
  const categories = [
    {
      icon: PhoneIcon,
      title: "Phones & Tablets",
    },
    {
      icon: Computer,
      title: "Computing",
    },
    {
      icon: Plug,
      title: "Electronics",
    },
    {
      icon: PhoneIcon,
      title: "Home & Office",
    },
    {
      icon: PhoneIcon,
      title: "Fashion",
    },
    {
      icon: PhoneIcon,
      title: "Health & Beauty",
    },
    {
      icon: PhoneIcon,
      title: "Games",
    },
    {
      icon: PhoneIcon,
      title: "Groceries",
    },
    {
      icon: PhoneIcon,
      title: "Baby Products",
    },
    {
      icon: PhoneIcon,
      title: "Sporting Goods",
    },
    {
      icon: PhoneIcon,
      title: "Automobile",
    },
    {
      icon: PhoneIcon,
      title: "Other Categories",
    },
  ];
  return (
    <aside className="cat-nav">
      <div className="title">
        <Image src="/vectors/menu.svg" width={25} height={21} />
        <p>Categories</p>
      </div>

      {categories.map(({ icon: LinkIcon, title }, catIndex) => (
        <div className="link" key={catIndex}>
          <LinkIcon />
          <p>{title}</p>
        </div>
      ))}
    </aside>
  );
};

export default CategoryNAv;
