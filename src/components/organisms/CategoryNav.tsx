import Image from "next/image";
import React from "react";

const CategoryNAv = () => {
  const categories = [
    {
      icon: "",
      title: "Phones & Tablets",
    },
    {
      icon: "",
      title: "Computing",
    },
    {
      icon: "",
      title: "Electronics",
    },
    {
      icon: "",
      title: "Home & Office",
    },
    {
      icon: "",
      title: "Fashion",
    },
    {
      icon: "",
      title: "Health & Beauty",
    },
    {
      icon: "",
      title: "Games",
    },
    {
      icon: "",
      title: "Groceries",
    },
    {
      icon: "",
      title: "Baby Products",
    },
    {
      icon: "",
      title: "Sporting Goods",
    },
    {
      icon: "",
      title: "Automobile",
    },
    {
      icon: "",
      title: "Other Categories",
    },
  ];
  return (
    <aside className="cat-nav">
      <div className="title">
        <Image src="/vectors/menu.svg" width={25} height={21} />
        <p>Categories</p>
      </div>

      {categories.map((cat, catIndex) => (
        <div className="link" key={catIndex}>
          <p>{cat.title}</p>
        </div>
      ))}
    </aside>
  );
};

export default CategoryNAv;
