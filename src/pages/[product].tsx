import dynamic from "next/dynamic";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Breadcrumbs from "../components/atoms/BreadCrumb";
import Button from "../components/atoms/Button";
import StarRating from "../components/atoms/vectors/StarRating";
import DeliveryInfo from "../components/organisms/DeliveryInfo";
import Layout from "../components/templates/Layout";
import { productsyoulike } from "../data/productsyoulike";
import { buyProduct } from "../store/cartReducer";
import { IProductType } from "../utils";

const SponsoredProduct = dynamic(
  () => import("../components/organisms/SponsoredProduct")
);
const ProuctDetails = dynamic(
  () => import("../components/organisms/ProuctDetails")
);
const BuyNow = dynamic(() => import("../components/organisms/BuyNow"));

const Product = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { product } = router.query;
  const [productData, setProductData] = useState<IProductType>();

  useEffect(() => {
    let selectedProduct = productsyoulike.find(
      (b, i) => b.id.toString() === product
    );
    setProductData(selectedProduct);
  }, [product]);

  return (
    <Layout>
      <main className="Product">
        <div>
          <Breadcrumbs />
        </div>
        <div className="grid grid-cols-[1fr_20rem] gap-4 mt-4">
          <section className="product-details">
            {productData && (
              <div>
                <Image
                  src={productData.img}
                  width={290}
                  height={292}
                  alt="image"
                />
                <div className="socials">
                  <p>SHARE THIS PRODUCT</p>
                </div>
              </div>
            )}
            {productData && (
              <article>
                <p>{productData.name}</p>
                <p className="brand">
                  Brand: <span> Samsung | Similar products from Samsung</span>
                </p>
                <div className="rating">
                  {Array(5)
                    .fill("")
                    .map((_, indxe) => (
                      <StarRating key={indxe} />
                    ))}
                  <span> (4 ratings)</span>
                </div>
                <div className="prices my-8">
                  <p className="flex items-center gap-1 mt-2 border-t text-2xl font-bold pt-6">
                    <Image width={24} height={19} src="/vectors/naira.svg" />
                    <p>{productData.discountedprice.toLocaleString()}</p>
                  </p>
                  <p className="flex items-center gap-1 mt-2 text-sm">
                    <Image width={13} height={13} src="/vectors/naira.svg" />
                    <p>{productData.price.toLocaleString()}</p>
                    <p className="bg-[#FF5655] text-white p-1 text-xs flex items-center">
                      -{productData.discount}%
                    </p>
                  </p>
                </div>
                <Button
                  otherClasses="uppercase"
                  onClick={() => {
                    dispatch(buyProduct({ product: productData, quantity: 1 }));
                    router.push("/cart");
                  }}
                >
                  Add to Cart
                </Button>
                <div className="more-offer">
                  <p>3 offers starting from ₦ 124,990 </p>
                  <p> See More Offers</p>
                </div>
                <div className="also-buy">
                  <p>you can also buy: </p>
                  <p> Details</p>
                </div>
                <div className="buy-box">
                  <div className="flex px-6 gap-3 border-b pb-6">
                    <Image width={40} height={30} src="/images/jumia.png" />
                    <div>
                      <p>Jumia Protect - Device Insurance </p>
                      <p>+ ₦ 19,650</p>
                    </div>
                  </div>
                  <div className="flex  justify-between p-6 gap-3 ">
                    <div>
                      <p>Total Price: </p>
                      <p>+ ₦ 19,650 </p>
                    </div>
                    <Button otherClasses="max-w-max text-xs uppercase">
                      Buy both
                    </Button>
                  </div>
                </div>
                <div className="">
                  <h4>Promotions </h4>
                  <p> Details</p>
                </div>
              </article>
            )}
          </section>
          <aside>
            <DeliveryInfo />
            <div className="list-product">
              <h1>
                Have one to sell?
                <br /> Click here to list your product
              </h1>
              <Image
                src="/vectors/caret-right.svg"
                width={15}
                height={15}
                alt="image"
              />
            </div>
          </aside>
        </div>
        <div className="grid grid-cols-[1fr_20rem] gap-4">
          <BuyNow />
        </div>
        <div className="grid grid-cols-[1fr_20rem] gap-4">
          <section>
            <ProuctDetails />
          </section>
          <section className="pt-12">
            <SponsoredProduct />
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Product;
