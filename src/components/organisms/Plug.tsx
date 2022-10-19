import * as React from "react";
import { SVGProps } from "react";

const Plug = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.679 2.498a1.177 1.177 0 0 0-1.177 1.177v2.353a1.177 1.177 0 0 0 2.353 0V3.675a1.177 1.177 0 0 0-1.176-1.177Zm-1.177 8.237h9.414v2.353a4.707 4.707 0 1 1-9.414 0v-2.353Zm5.883 9.316a7.062 7.062 0 0 0 5.884-6.963V8.381H7.149v4.707a7.062 7.062 0 0 0 5.883 6.963v5.981a1.177 1.177 0 0 0 2.353 0v-5.981Zm1.177-16.376a1.177 1.177 0 0 1 2.354 0v2.353a1.177 1.177 0 0 1-2.354 0V3.675Z"
      fill="#354454"
    />
  </svg>
);

export default Plug;
