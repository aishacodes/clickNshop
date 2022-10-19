import Link from "next/link";
import React from "react";
import { recommended } from "../../data";
import ProductCard2 from "../molecules/ProductCard2";

const Recommended = () => {
  return (
    <section className="Recommended">
      <h1>Recommended For You</h1>
      <div className="products">
        {recommended.map((product, index) => (
          <div key={`product_index-${index}`}>
            <Link href="/[product]" as={`/${product.id}`}>
              <a>
                <div className="">
                  <ProductCard2 {...product} />
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recommended;
