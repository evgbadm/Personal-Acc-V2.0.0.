/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EnvironmentCoffeeIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EnvironmentCoffeeIcon(props: EnvironmentCoffeeIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
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
        strokeWidth={"1.983"}
        d={
          "M.992 21.164h8.1m0 0h.132m-.132 0h.132m-.132 0a8.167 8.167 0 0 1-8.1-8.167V8.24c0-.594.482-1.076 1.076-1.076h14.18c.595 0 1.077.482 1.077 1.076v.09m-8.1 12.834h8.1m-8.1 0a8.167 8.167 0 0 0 8.1-8.167m0-4.667h1.75a2.917 2.917 0 0 1 0 5.834h-1.75v-1.167m0-4.667v4.667m-3.5-11.667-1.167 2.334M10.325 1.33 9.158 3.664M6.825 1.33 5.658 3.664"
        }
      ></path>
    </svg>
  );
}

export default EnvironmentCoffeeIcon;
/* prettier-ignore-end */
