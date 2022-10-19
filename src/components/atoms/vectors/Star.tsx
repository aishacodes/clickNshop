import * as React from "react";
import { SVGProps } from "react";

const Star = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0Zm.046 2.449L8.15 5.893l3.616.082-2.936 2.112 1.04 3.464-2.916-2.139-2.973 2.06 1.133-3.435-2.878-2.19 3.617.016 1.194-3.414Z"
      fill="#043E7D"
    />
  </svg>
);

export default Star;
