import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Button from "../components/atoms/Button";
import DeleteIcon from "../components/atoms/vectors/DeleteIcon";
import Dispatch from "../components/atoms/vectors/Dispatch";
import Like from "../components/atoms/vectors/Like";
import Layout from "../components/templates/Layout";
import { useAppSelector } from "../utils";
import { totalCartAmount } from "../utils/helpers";
const Recommended = dynamic(
  () => import("../components/organisms/Recommended")
);

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
                  <div className="flex items-start gap-3 border-r">
                    <Image width={60} height={60} src={product.img} />
                    <div>
                      <span className="text-sm text-gray5">
                        Seller: THE 4DX
                      </span>
                      <h6>{product.name}</h6>
                      <div className="mt-4 flex items-center">
                        <Like />
                        <span className="uppercase ml-2 mr-6 text-primary">
                          move to saved items
                        </span>
                        <DeleteIcon />
                        <span className="uppercase ml-2 mr-6 text-primary">
                          remove
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="border-r">{quantity}</p>
                  <p className="border-r">
                    <Image width={15} height={15} src="/vectors/naira.svg" />
                    {product.price.toLocaleString()}
                  </p>
                  <p className="text-[#043E7D]">
                    <Image
                      width={15}
                      height={15}
                      src="/vectors/naira-blue.svg"
                    />
                    {(product.price * quantity)?.toLocaleString()}
                  </p>
                </div>
              ))}
              <div className="total">
                <p />
                <p />
                <p>Total</p>
                <p className="text-[#043E7D]">
                  <Image width={15} height={15} src="/vectors/naira-blue.svg" />
                  {totalCartAmount(cart)}
                </p>
                <span>Delivery fee not included yet</span>
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
