import { css, styled } from "../stitches.config";
import type * as Stitches from "@stitches/react";

type LayoutItems = "start" | "end" | "center" | "streth";
type JustifyContentVariant =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";
type JustifyContentValue =
  | "start"
  | "end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore

export const GridBox = styled("div", {
  display: "grid !important",
  gridTemplateColumns: {
    // @ts-ignore
    "@initial": "1fr",
    "@sm": "1fr",
    "@md": "1fr 1fr",
  },

  variants: {
    // @ts-ignore
    boxSizing: "border-box",
    gap: {
      "0": { gap: "$0" },
      "1": { gap: "$1" },
      "2": { gap: "$2" },
      "3": { gap: "$3" },
      "4": { gap: "$4" },
      "5": { gap: "$5" },
      "6": { gap: "$6" },
    },
    cols: {
      "1-075": { gridTemplateColumns: "1fr 0.75fr" },
      "075-1": { gridTemplateColumns: "0.75fr 1.25fr" },

      "1": { gridTemplateColumns: "1fr" },
      "2": { gridTemplateColumns: "1fr 1fr" },
      "3": { gridTemplateColumns: "1fr 1fr 1fr" },
      "4": { gridTemplateColumns: "1fr 1fr 1fr 1fr" },
      "5": { gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" },
      "6": { gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr" },
    },
    rows: {
      "1": { gridTemplateRows: "1fr" },
      "2": { gridTemplateRows: "1fr 1fr" },
      "3": { gridTemplateRows: "1fr 1fr 1fr" },
      "4": { gridTemplateRows: "1fr 1fr 1fr 1fr" },
      "5": { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr" },
      "6": { gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr" },
    },
    justifyContent: {
      evenly: { justifyContent: "space-evenly" },
      start: { justifyContent: "start" },
      end: { justifyContent: "end" },
      center: { justifyContent: "center" },
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
    },
    justifyItems: {
      stretch: { justifyItems: "stretch" },
      start: { justifyItems: "start" },
      end: { justifyItems: "end" },
      center: { justifyItems: "center" },
    },
    align: {
      evenly: { alignContent: "space-evenly" },
      start: { alignContent: "start" },
      end: { alignContent: "end" },
      center: { alignContent: "center" },
      between: { alignContent: "space-between" },
      around: { alignContent: "space-around" },
    },
  },
  position: "relative",
  defaultVariants: {
    //@ts-ignore
    gridTemplateRows: "auto",
    columnGap: "4px",
    rowGap: "4px",
    gap: "4px",
  },
});

const itemStyle: Stitches.CSS = {
  variants: {
    justifySelf: {
      start: { justifySelf: "start" },
      end: { justifySelf: "end" },
      center: { justifySelf: "center" },
      between: { justifySelf: "space-between" },
      around: { justifySelf: "space-around" },
    },
    alignSelf: {
      start: { alignSelf: "start" },
      end: { alignSelf: "end" },
      center: { alignSelf: "center" },
      between: { alignSelf: "space-between" },
      around: { alignSelf: "space-around" },
    },
  },
};

export const GridItem = styled("div", itemStyle);
