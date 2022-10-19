import * as React from "react";
import { SVGProps } from "react";

const Computer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.564 2.605H4.736A2.353 2.353 0 0 0 2.383 4.96v14.12a2.353 2.353 0 0 0 2.353 2.354h7.06v2.353h-3.53v2.354h11.768v-2.354h-3.53v-2.353h7.06a2.353 2.353 0 0 0 2.353-2.354V4.96a2.353 2.353 0 0 0-2.353-2.354Zm0 16.474H4.736V4.96h18.828v14.12Z"
      fill="#354454"
    />
  </svg>
);

export default Computer;
