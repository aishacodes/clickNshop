import Image from "next/image";
import React, { useState } from "react";

const ProuctDetails = () => {
  const tabs = ["Product Details", "Reviews", "Product Specification"];
  const [activeTab, setactiveTab] = useState(0);
  return (
    <section className="ProuctDetails">
      <header>
        {tabs.map((tab, index) => (
          <p
            key={index}
            className={`${activeTab == index && "active"}`}
            onClick={() => setactiveTab(index)}
          >
            {tab}
          </p>
        ))}
      </header>
      <div className="details">
        <div className="mx-auto max-w-max my-8">
          <Image width={741} height={400} src="/images/galaxy.png" />
        </div>
        <p>
          Following in the tradition of the powerful Samsung A series, here
          comes the Samsung Galaxy A50 smartphone. The A50 mobile features a 6.4
          inch (16.26 cm) display with a screen resolution of 1080 x 2340 pixels
          and runs on Android 9.0 (Pie) operating system. The super smart device
          is powered by Octa-core (2.3 GHz, Quad core, Cortex A73 + 1.7 GHz,
          Quad core, Cortex A53) processor paired with 4GB of RAM. The battery
          has 4000mAh capacity and the rear cameras are 25MP + 5MP + 8MP.
        </p>
        <p>
          Other features include Light sensor, Proximity sensor, Accelerometer,
          Gyroscope. So, does it have a fingerprint sensor? Yes, it does. For
          graphical performance that makes games run smoothly, the Samsung
          Galaxy A50 is powered with the Mali-G72 MP3 GPU and the ROM docks at
          64 GB and yes! You can expand it to 512GB. The super slim design of
          the A50 (7.7 mm width and 166 grams weight) makes it a winner every
          time.
        </p>
      </div>
    </section>
  );
};

export default ProuctDetails;
