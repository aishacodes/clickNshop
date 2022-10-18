import Image from "next/image";
import React from "react";
import Layout from "../components/templates/Layout";

const Cart = () => {
  return (
    <Layout>
      <div className="Cart">
        <h1>Cart (2 items)</h1>
        <header>
          <Image src="/images/logo1.png" width={70} height={70} />
          <span>items on your Cart are eligible for Free Shipping.</span>
        </header>
      </div>
    </Layout>
  );
};

export default Cart;
