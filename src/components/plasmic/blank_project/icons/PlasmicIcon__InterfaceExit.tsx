/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InterfaceExitIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InterfaceExitIcon(props: InterfaceExitIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
        d={
          "m8.85 11.85 3-3m0 0-3-3m3 3h-11m0-4.752V4.05c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874C2.37.85 2.93.85 4.05.85h9.6c1.12 0 1.68 0 2.107.218.377.192.684.497.875.874.218.427.218.987.218 2.105v9.607c0 1.117 0 1.677-.218 2.104a2 2 0 0 1-.875.874c-.427.218-.986.218-2.104.218H4.047c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C.85 15.33.85 14.77.85 13.65v-.05"
        }
      ></path>
    </svg>
  );
}

export default InterfaceExitIcon;
/* prettier-ignore-end */
