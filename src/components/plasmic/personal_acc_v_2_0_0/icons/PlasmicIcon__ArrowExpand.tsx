/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowExpandIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowExpandIcon(props: ArrowExpandIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
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
        strokeWidth={"1.7"}
        d={"M5.85 14.85h-5v-5m9-9h5v5"}
      ></path>
    </svg>
  );
}

export default ArrowExpandIcon;
/* prettier-ignore-end */
