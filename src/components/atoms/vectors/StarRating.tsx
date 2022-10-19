import * as React from "react";
import { SVGProps } from "react";

const StarRating = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.131 5.438a.84.84 0 0 0 .249-.92c-.117-.328-.42-.562-.794-.612l-3.321-.44a.433.433 0 0 1-.327-.218L8.454.501A.99.99 0 0 0 7.572 0a.99.99 0 0 0-.882.5L5.205 3.25a.433.433 0 0 1-.327.217l-3.32.44c-.374.05-.678.284-.795.612a.84.84 0 0 0 .249.92l2.403 2.14c.102.09.149.222.125.35l-.567 3.02a.826.826 0 0 0 .214.729 1.06 1.06 0 0 0 1.213.218l2.97-1.426a.483.483 0 0 1 .404 0l2.97 1.426a1.047 1.047 0 0 0 1.212-.218.826.826 0 0 0 .214-.728l-.567-3.02a.376.376 0 0 1 .125-.352l2.403-2.139Z"
      fill="#FBC91A"
    />
  </svg>
);

export default StarRating;
