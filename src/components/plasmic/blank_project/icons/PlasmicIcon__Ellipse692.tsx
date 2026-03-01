/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse692IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse692Icon(props: Ellipse692IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      xmlnsXlink={"http://www.w3.org/1999/xlink"}
      fill={"none"}
      viewBox={"0 0 78 78"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <foreignObject width={"98"} height={"98"} x={"-10"} y={"-10"}>
        <div
          xmlns={"http://www.w3.org/1999/xhtml"}
          clipPath={"url(#a)"}
          style={{
            backdropFilter: "blur(5px)",
            height: "100%",
            width: '100%"'
          }}
        ></div>
      </foreignObject>

      <g data-figma-bg-blur-radius={"10"}>
        <circle
          cx={"39"}
          cy={"39"}
          r={"39"}
          fill={"currentColor"}
          fillOpacity={".4"}
        ></circle>

        <circle
          cx={"39"}
          cy={"39"}
          r={"38.5"}
          stroke={"currentColor"}
          strokeOpacity={".7"}
        ></circle>
      </g>

      <defs>
        <clipPath id={"a"} transform={"translate(10 10)"}>
          <circle cx={"39"} cy={"39"} r={"39"}></circle>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Ellipse692Icon;
/* prettier-ignore-end */
