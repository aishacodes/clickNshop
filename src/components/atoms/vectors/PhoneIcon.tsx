import * as React from "react";
import { SVGProps } from "react";

const PhoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={29}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.148 23.894V5.066a2.36 2.36 0 0 1 2.354-2.353h9.414a2.36 2.36 0 0 1 2.353 2.353v18.828a2.36 2.36 0 0 1-2.353 2.353H9.502a2.36 2.36 0 0 1-2.354-2.353Z"
      fill="#354454"
    />
    <path
      d="M18.916 4.478H9.502c-.353 0-.588.235-.588.588V22.13c0 .352.235.588.588.588h9.414c.353 0 .588-.235.588-.588V5.066c0-.353-.235-.588-.588-.588Z"
      fill="#fff"
      fillOpacity={0.5}
    />
    <path d="M12.444 23.894h3.53v1.176h-3.53v-1.176Z" fill="#354454" />
  </svg>
);

export default PhoneIcon;
