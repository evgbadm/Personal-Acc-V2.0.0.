/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarCalendar2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarCalendar2Icon(props: CalendarCalendar2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
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
          "M.85 5.85h13.333M.85 5.85v7.334c0 .933 0 1.4.182 1.756.16.314.414.569.728.729.356.181.822.181 1.754.181h8.005c.932 0 1.398 0 1.754-.181.313-.16.57-.415.729-.73.181-.355.181-.821.181-1.753V5.85M.85 5.85v-.666c0-.934 0-1.401.182-1.758.16-.313.414-.568.728-.728.356-.181.823-.181 1.757-.181h.666m10 3.333v-.67c0-.93 0-1.397-.181-1.753a1.67 1.67 0 0 0-.73-.729c-.356-.181-.822-.181-1.755-.181h-.667m-6.667 0h6.667m-6.667 0V.85m6.667 1.667V.85"
        }
      ></path>
    </svg>
  );
}

export default CalendarCalendar2Icon;
/* prettier-ignore-end */
