/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle1556IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle1556Icon(props: Rectangle1556IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 34"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M0 6.515C0 2.55 3.512-.495 7.437.067l21.366 3.058a6.514 6.514 0 0 1 5.591 6.448v13.968a6.514 6.514 0 0 1-5.55 6.442L7.477 33.178C3.54 33.767 0 30.718 0 26.736V6.516z"
        }
      ></path>
    </svg>
  );
}

export default Rectangle1556Icon;
/* prettier-ignore-end */
