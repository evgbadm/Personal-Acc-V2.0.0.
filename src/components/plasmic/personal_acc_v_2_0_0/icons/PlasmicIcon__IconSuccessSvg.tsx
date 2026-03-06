/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconSuccessSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconSuccessSvgIcon(props: IconSuccessSvgIconProps) {
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
        stroke={"currentColor"}
        strokeWidth={"2"}
        d={"M1 11.588 8.615 19 23 5"}
      ></path>
    </svg>
  );
}

export default IconSuccessSvgIcon;
/* prettier-ignore-end */
