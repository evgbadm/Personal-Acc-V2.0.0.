/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FileFileDocumentIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FileFileDocumentIcon(props: FileFileDocumentIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M11.66 19.7H4.05c-1.21 0-1.88 0-2.49-.31-.54-.27-.97-.7-1.25-1.24C0 17.54 0 16.87 0 15.65V4.05c0-1.22 0-1.88.31-2.49.27-.54.71-.97 1.25-1.25C2.17 0 2.84 0 4.05 0h4.8c.33 0 .57.02.83.08.29.07.57.19.83.34.29.17.49.38.87.76l3.13 3.13c.37.37.59.59.76.88.16.26.27.53.34.83.06.26.07.5.08.83v8.81c0 1.21 0 1.88-.31 2.49-.27.53-.71.98-1.25 1.25-.61.31-1.28.31-2.49.31zm-7.6-18c-.92 0-1.48 0-1.72.12a1.1 1.1 0 0 0-.5.5c-.12.25-.12.8-.12 1.72v11.6c0 .92 0 1.48.12 1.72.11.22.29.39.5.5.25.13.8.13 1.72.13h7.61c.92 0 1.47 0 1.72-.12.22-.11.39-.29.5-.5.13-.25.13-.8.13-1.72V7.7h-1.95c-1.21 0-1.88 0-2.49-.31a2.9 2.9 0 0 1-1.25-1.24c-.31-.61-.31-1.28-.31-2.5V1.7zm5.65.22v1.73c0 .92 0 1.48.13 1.72.11.22.29.39.5.5.25.12.8.12 1.72.12h1.73c-.08-.1-.22-.24-.46-.49L10.2 2.37c-.23-.23-.38-.38-.49-.46z"
        }
      ></path>
    </svg>
  );
}

export default FileFileDocumentIcon;
/* prettier-ignore-end */
