import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import BestSeller from "../components/organisms/BestSeller";
import CategoryNAv from "../components/organisms/CategoryNav";
import Deal from "../components/organisms/Deal";
import HomeNav from "../components/organisms/HomeNav";
import ProductYouLike from "../components/organisms/ProductYouLike";
import ProfileInfo from "../components/organisms/ProfileInfo";

const FlashSales = dynamic(() => import("../components/organisms/FlashSales"));
const Challenges = dynamic(() => import("../components/organisms/Challenges"));
const BestDeals = dynamic(() => import("../components/organisms/BestDeals"));

const Home: NextPage = () => {
  return (
    <main>
      <HomeNav />
      <div className="wrapper ">
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
      </div>
    </main>
  );
};

export default Home;
