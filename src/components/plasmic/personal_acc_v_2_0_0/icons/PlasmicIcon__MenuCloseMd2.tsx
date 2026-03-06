/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuCloseMd2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuCloseMd2Icon(props: MenuCloseMd2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 15 15"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={"m13.202 13.202-6-6zm-6-6-6-6zm0 0 6-6zm0 0-6 6z"}
      ></path>

      <path
        stroke={"currentColor"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
        strokeWidth={"1.7"}
        d={"m13.202 13.202-6-6m0 0-6-6m6 6 6-6m-6 6-6 6"}
      ></path>
    </svg>
  );
}

export default MenuCloseMd2Icon;
/* prettier-ignore-end */
