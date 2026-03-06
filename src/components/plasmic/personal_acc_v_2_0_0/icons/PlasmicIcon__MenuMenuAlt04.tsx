/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuMenuAlt04IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuMenuAlt04Icon(props: MenuMenuAlt04IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 8"}
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
        strokeWidth={"1.133"}
        d={"M.567 7.233H9.9M.567 3.9H9.9M.567.567H5.9"}
      ></path>
    </svg>
  );
}

export default MenuMenuAlt04Icon;
/* prettier-ignore-end */
