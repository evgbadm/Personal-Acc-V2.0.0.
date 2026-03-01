/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuCloseMdIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuCloseMdIcon(props: MenuCloseMdIconProps) {
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
        stroke={"currentColor"}
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
        strokeWidth={"1.889"}
        d={"m13.336 13.336-6-6m0 0-6-6m6 6 6-6m-6 6-6 6"}
      ></path>
    </svg>
  );
}

export default MenuCloseMdIcon;
/* prettier-ignore-end */
