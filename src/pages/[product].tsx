import Image from "next/image";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/atoms/Button";
import StarRating from "../components/atoms/vectors/StarRating";
import Layout from "../components/templates/Layout";
import { productsyoulike } from "../data/productsyoulike";
import { buyProduct } from "../store/cartReducer";
import { IProductType } from "../utils";

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
        <div>Breadcrumb</div>
        <div className="grid grid-cols-[1fr_20rem] gap-4">
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
                <div className="prices">
                  <p>124,000</p>
                  <p>150,000</p>
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
              </article>
            )}
          </section>
          <section>
            <div className="delivery">
              <h1>Delivery and Returns</h1>
            </div>
            <div className="seller-info">
              <header>
                <h1>SELLER INFORMATION </h1>
                <Image
                  src="/vectors/caret-right.svg"
                  width={15}
                  height={15}
                  alt="image"
                />
              </header>
              <p> woozeee store</p>
              <p>90% Seller Score</p>
            </div>
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
          </section>
        </div>
      </main>
    </Layout>
  );
};

export default Product;
