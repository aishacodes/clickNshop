import * as React from "react";
import { SVGProps } from "react";

const LeftCaretIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.233 3.416C7.897 3.416 2.76 8.553 2.76 14.889c0 6.336 5.137 11.473 11.473 11.473 6.336 0 11.473-5.137 11.473-11.473 0-6.336-5.137-11.473-11.473-11.473Zm-2.207 18.016-1.248-1.248 5.295-5.295-5.295-5.295 1.248-1.249 6.544 6.544-6.544 6.543Z"
      fill="#C1DBF2"
    />
  </svg>
);

export default LeftCaretIcon;
