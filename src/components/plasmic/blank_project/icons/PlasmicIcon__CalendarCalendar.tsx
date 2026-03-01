/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalendarCalendarIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalendarCalendarIcon(props: CalendarCalendarIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 20"}
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
          "M.85 6.85h16m-16 0v8.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218.377-.192.684-.498.875-.874.218-.427.218-.986.218-2.104V6.85m-16 0v-.8c0-1.12 0-1.68.218-2.108.192-.377.497-.682.874-.874.428-.218.988-.218 2.108-.218h.8m12 4v-.803c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874c-.427-.218-.987-.218-2.107-.218h-.8m-8 0h8m-8 0v-2m8 2v-2"
        }
      ></path>
    </svg>
  );
}

export default CalendarCalendarIcon;
/* prettier-ignore-end */
