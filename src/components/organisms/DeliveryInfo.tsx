import Image from "next/image";
import React from "react";

const DeliveryInfo = () => {
  const delivery = [
    {
      icon: "truck",
      title: "Delivery Information",
      desc: " Shipped from abroad. Delivered between Thursday 19 Dec and Thursday 26 Dec.",
    },
    {
      icon: "delivery",
      title: "Return Policy",
      desc: "Free return within 15 days for Jumia Mall items and 7 days for other eligible items.",
    },
    {
      icon: "delivery",
      title: "Warranty",
      desc: "24 Months",
    },
  ];
  return (
    <aside>
      <div className="delivery">
        <h1>Delivery and Returns</h1>
        <div>
          {delivery.map((p, i) => (
            <div className="d-info">
              <Image
                src={`/vectors/${p.icon}.svg`}
                width={32}
                height={28}
                alt="image"
              />
              <p className="flex-grow">
                <span>{p.title}</span>
                <span>{p.desc}</span>
              </p>
            </div>
          ))}
        </div>
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
        <div>
          <p className="border-t-2">Seller Performance</p>
          {Array(2)
            .fill("")
            .map((_, index) => (
              <div key={index} className="flex px-4">
                <Image
                  src="/vectors/green.svg"
                  width={15}
                  height={15}
                  alt="image"
                />
                <p>Order Fulfillment Rate: Excellent</p>
              </div>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default DeliveryInfo;
