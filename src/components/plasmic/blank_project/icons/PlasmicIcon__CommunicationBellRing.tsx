/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CommunicationBellRingIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CommunicationBellRingIcon(
  props: CommunicationBellRingIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 25"}
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
          "M15.505 18.873v1.166a3.5 3.5 0 1 1-7 0v-1.166m7 0h-7m7 0h4.19c.445 0 .67 0 .85-.061.345-.117.616-.388.732-.733.061-.181.061-.406.061-.856 0-.197 0-.295-.015-.389a1.2 1.2 0 0 0-.203-.491 2.5 2.5 0 0 0-.265-.287l-.454-.454a.78.78 0 0 1-.23-.553v-4.343a8.167 8.167 0 0 0-16.332 0v4.343a.78.78 0 0 1-.23.553l-.454.454c-.14.14-.209.21-.264.287a1.2 1.2 0 0 0-.204.491c-.015.094-.015.192-.015.39 0 .449 0 .674.061.855.116.345.388.616.733.733.18.06.404.06.85.06h4.19M19.025 1.39a11.67 11.67 0 0 1 3.68 4.669M4.984 1.388a11.67 11.67 0 0 0-3.68 4.67"
        }
      ></path>
    </svg>
  );
}

export default CommunicationBellRingIcon;
/* prettier-ignore-end */
