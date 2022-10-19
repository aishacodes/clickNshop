import * as React from "react";
import { SVGProps } from "react";

const CaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m7.442 9.63 4.707 4.706 4.707-4.707H7.442Z" fill="#354454" />
  </svg>
);

export default CaretDown;
