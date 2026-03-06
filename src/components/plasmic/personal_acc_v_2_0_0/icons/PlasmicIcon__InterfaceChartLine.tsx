/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type InterfaceChartLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function InterfaceChartLineIcon(props: InterfaceChartLineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 12"}
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
        d={
          "M.567 7.233v1.2c0 .747 0 1.12.145 1.405.128.251.332.456.583.584.284.145.658.145 1.403.145h9.869m-12-3.334V.567m0 6.666 2.569-2.14.002-.002c.464-.387.697-.581.95-.66.298-.093.62-.078.908.041.244.102.459.316.888.745l.004.005c.436.435.654.654.903.755.294.12.621.13.923.03.255-.085.489-.289.956-.697l3.897-3.41"
        }
      ></path>
    </svg>
  );
}

export default InterfaceChartLineIcon;
/* prettier-ignore-end */
