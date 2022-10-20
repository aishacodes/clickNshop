import * as React from "react";
import { SVGProps } from "react";

const Like = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m8.292 2.677.706.706.707-.706C10.475 1.908 11.69 1 12.984 1c1.252 0 2.25.413 2.926 1.058.673.64 1.09 1.567 1.09 2.718 0 1.243-.505 2.298-1.357 3.31-.87 1.036-2.042 1.956-3.3 2.939l-.024.02c-1.111.867-2.34 1.828-3.32 2.904-.97-1.067-2.188-2.02-3.29-2.882l-.053-.042c-1.258-.983-2.43-1.904-3.3-2.939C1.505 7.074 1 6.02 1 4.776c0-1.151.417-2.077 1.09-2.718C2.767 1.413 3.764 1 5.017 1c1.291 0 2.504.907 3.275 1.677Z"
      stroke={props.color || "#043E7D"}
      strokeWidth={2}
    />
  </svg>
);

export default Like;
