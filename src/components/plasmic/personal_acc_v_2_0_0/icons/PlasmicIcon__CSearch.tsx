/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CSearchIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CSearchIcon(props: CSearchIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        stroke={"currentColor"}
        strokeWidth={"1.311"}
        d={
          "M11 2.755c4.528 0 8.144 3.698 8.144 8.245A8.093 8.093 0 0 1 11 19.144c-4.542 0-8.245-3.71-8.245-8.144 0-4.442 3.712-8.245 8.245-8.245zm0 .49c-4.262 0-7.755 3.493-7.755 7.755 0 4.25 3.482 7.856 7.755 7.856 4.256 0 7.856-3.488 7.856-7.856 0-4.38-3.612-7.755-7.856-7.755z"
        }
      ></path>

      <path
        fill={"currentColor"}
        d={"m16.95 15.818-1.203 1.202 5.233 5.233 1.202-1.202z"}
      ></path>
    </svg>
  );
}

export default CSearchIcon;
/* prettier-ignore-end */
