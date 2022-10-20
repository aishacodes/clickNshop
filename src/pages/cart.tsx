import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/atoms/Button";
import Dispatch from "../components/atoms/vectors/Dispatch";
import Recommended from "../components/organisms/Recommended";
import Layout from "../components/templates/Layout";
import { useAppSelector } from "../utils";
import { totalCartAmount } from "../utils/helpers";

const Cart = () => {
  const {
    cartReducer: { cart },
  } = useAppSelector((state) => state);
  console.log(cart);
  return (
    <Layout>
      <>
        <div className="Cart">
          <h1>Cart ({cart?.length} items)</h1>
          <header>
            <Image src="/images/logo1.png" width={60} height={60} />
            <Dispatch />
            <span>items on your Cart are eligible for Free Shipping.</span>
          </header>
          <header className="table-header">
            <h1 className="items">Items</h1>
            <h1>quantity</h1>
            <h1>unit price</h1>
            <h1>subtotal</h1>
          </header>
          {cart.length ? (
            <main>
              {cart.map(({ product, quantity }, productIndex) => (
                <div className="cart-detail" key={productIndex}>
                  <div className="flex gap-3">
                    <Image width={60} height={60} src={product.img} />
                    <p>{product.name}</p>
                  </div>
                  <p>{quantity}</p>
                  <p>{product.price}</p>
                  <p>{product.price * quantity}</p>
                </div>
              ))}
              <div className="total">
                <p>Total</p>
                <p>{totalCartAmount(cart)}</p>
              </div>
            </main>
          ) : (
            <p className="">Cart is Empty</p>
          )}
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
