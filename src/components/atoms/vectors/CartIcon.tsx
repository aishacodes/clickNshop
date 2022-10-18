import * as React from "react";
import { SVGProps } from "react";

const CartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={19}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.5 3.375H3.637L3.125.75A.625.625 0 0 0 2.5.25H0V1.5h1.988l2.387 12A.625.625 0 0 0 5 14h11.25v-1.25H5.512L5 10.25h11.25a.625.625 0 0 0 .625-.487l1.25-5.625a.625.625 0 0 0-.625-.763ZM15.75 9H4.762l-.874-4.375h12.83L15.75 9Z"
      fill="#000"
    />
  </svg>
);

export default CartIcon;
