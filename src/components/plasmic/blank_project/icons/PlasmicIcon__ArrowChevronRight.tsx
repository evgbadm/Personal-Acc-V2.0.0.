/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowChevronRightIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowChevronRightIcon(props: ArrowChevronRightIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={"M1.2 16.4 0 15.2l7-7-7-7L1.2 0l7.6 7.6c.33.33.33.87 0 1.2z"}
      ></path>
    </svg>
  );
}

export default ArrowChevronRightIcon;
/* prettier-ignore-end */
