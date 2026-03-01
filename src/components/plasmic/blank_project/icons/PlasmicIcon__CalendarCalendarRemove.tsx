/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarCalendarRemoveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarCalendarRemoveIcon(
  props: CalendarCalendarRemoveIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 23"}
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
          "M.992 7.992h18.666m-18.666 0v10.267c0 1.306 0 1.96.254 2.459.224.439.58.796 1.02 1.02.498.254 1.151.254 2.455.254H15.93c1.304 0 1.956 0 2.455-.254a2.33 2.33 0 0 0 1.02-1.02c.254-.5.254-1.151.254-2.456V7.992m-18.666 0v-.933c0-1.307 0-1.961.254-2.46.224-.44.58-.796 1.02-1.02.499-.254 1.152-.254 2.46-.254h.932m14 4.667v-.937c0-1.305 0-1.958-.254-2.456a2.33 2.33 0 0 0-1.02-1.02c-.5-.254-1.152-.254-2.459-.254h-.933m-9.334 0h9.334m-9.334 0V.992m9.334 2.333V.992m-1.75 14H7.408"
        }
      ></path>
    </svg>
  );
}

export default CalendarCalendarRemoveIcon;
/* prettier-ignore-end */
