/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileCloudRemoveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileCloudRemoveIcon(props: FileCloudRemoveIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 19"}
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
          "M10.325 10.325h7m9.333 2.333a4.667 4.667 0 0 0-4.748-4.666A8.17 8.17 0 0 0 6.439 5.671a5.834 5.834 0 0 0 .386 11.654h15.167a4.667 4.667 0 0 0 4.666-4.667z"
        }
      ></path>
    </svg>
  );
}

export default FileCloudRemoveIcon;
/* prettier-ignore-end */
