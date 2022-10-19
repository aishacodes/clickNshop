import Image from "next/image";
import React from "react";

const ProfileInfo = () => {
  return (
    <div className="flex flex-col justify-between mt-6">
      <div className="flex flex-col items-center bg-white rounded-[9px] mb-4 py-[1.8rem]">
        <Image src="/vectors/avatar.svg" width={85} height={85} alt="image" />
        <p className="py-4 text-[#354454] font-bold text-lg"> Hi, Okemena</p>
        <div className=" flex items-center gap-2">
          <Image
            src="/vectors/profile.svg"
            width={47}
            height={47}
            alt="image"
          />
          <Image
            src="/vectors/order-icon.svg"
            width={47}
            height={47}
            alt="image"
          />
          <Image
            src="/vectors/message-icon.svg"
            width={47}
            height={47}
            alt="image"
          />
        </div>
      </div>
      <Image
        src="/images/backfriday.png"
        width={247}
        height={303}
        alt="image"
      />
    </div>
  );
};

export default ProfileInfo;
