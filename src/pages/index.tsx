import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import BestDeals from "../components/organisms/BestDeals";
import BestSeller from "../components/organisms/BestSeller";
import CategoryNAv from "../components/organisms/CategoryNav";
import Challenges from "../components/organisms/Challenges";
import Deal from "../components/organisms/Deal";
import FlashSales from "../components/organisms/FlashSales";
import ProductYouLike from "../components/organisms/ProductYouLike";
import ProfileInfo from "../components/organisms/ProfileInfo";

const Home: NextPage = () => {
  return (
    <main className=" px-16 pb-16 bg-lightBlue">
      <section className="category">
        <CategoryNAv />
        <Deal />
        <ProfileInfo />
      </section>
      <BestSeller />
      <section className="best">
        <ProductYouLike />
        <BestDeals />
      </section>
      <Challenges />
      <FlashSales />
    </main>
  );
};

export default Home;
