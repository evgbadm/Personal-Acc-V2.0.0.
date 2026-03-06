/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IconPlusSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IconPlusSvgIcon(props: IconPlusSvgIconProps) {
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

      <path fill={"currentColor"} d={"M0 13v-2h24v2z"}></path>

      <path fill={"currentColor"} d={"M11 0h2v24h-2z"}></path>
    </svg>
  );
}

export default IconPlusSvgIcon;
/* prettier-ignore-end */
