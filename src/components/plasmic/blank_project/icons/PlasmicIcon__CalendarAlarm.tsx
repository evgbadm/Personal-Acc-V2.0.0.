/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarAlarmIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarAlarmIcon(props: CalendarAlarmIconProps) {
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
        strokeLinecap={"square"}
        strokeLinejoin={"round"}
        strokeWidth={"1.983"}
        d={
          "M11.897 7.23v5.834h5.833m4.671-8.667-3.575-3m-13.854 0-3.575 3m10.5 18a9.333 9.333 0 1 1 0-18.667 9.333 9.333 0 0 1 0 18.667z"
        }
      ></path>
    </svg>
  );
}

export default CalendarAlarmIcon;
/* prettier-ignore-end */
