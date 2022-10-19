import Image from "next/image";
import React from "react";
import Button from "../components/atoms/Button";
import Dispatch from "../components/atoms/vectors/Dispatch";
import Recommended from "../components/organisms/Recommended";
import Layout from "../components/templates/Layout";

const Cart = () => {
  return (
    <Layout>
      <>
        <div className="Cart">
          <h1>Cart (2 items)</h1>
          <header>
            <Image src="/images/logo1.png" width={60} height={60} />
            <Dispatch />
            <span>items on your Cart are eligible for Free Shipping.</span>
          </header>
        </div>
        <section className="cont-shop">
          <Button otherClasses="max-w-max " outlined>
            CONTINUE SHOPPING
          </Button>
          <Button otherClasses="max-w-max">PROCEED TO CHECKOUT</Button>
        </section>
        <Recommended />
        <Recommended />
      </>
    </Layout>
  );
};

export default Cart;
