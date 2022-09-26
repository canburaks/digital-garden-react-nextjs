import {ReactNode} from "react";
import {styled, theme} from "../stitches.config";
import type * as Stitches from "@stitches/react";

export const Box = styled("div", {});

const style: Stitches.CSS = {
  display: "flex",
  position: "relative",
  variants: {
    position: {
      absolute: {
        position: "absolute"
      }
    },
    direction: {
      column: {
        flexDirection: "column",
      },
      col: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
    wrap: {
      wrap: {flexWrap: "wrap"},
      nowrap: {flexWrap: "nowrap"},
    },
    justify: {
      start: {justifyContent: "flex-start"},
      around: {justifyContent: "space-around"},
      between: {justifyContent: "space-between"},
      end: {justifyContent: "flex-end"},
      center: {justifyContent: "center"},
    },
    items: {
      start: {alignItems: "flex-start"},
      end: {alignItems: "flex-end"},
      center: {alignItems: "center"},
      stretch: {alignItems: "streth"},
    },
    width: {
      full: {width: "100%"},
      auto: {width: "auto"},
      main: {maxWidth: theme.space.mainWidth, margin: "0 auto"},
      grid: {width: theme.space.gridWidth, margin: "0 auto"},
    },
    maxWidth: {
      screen: {maxWidth: "100vw", overflowX: "hidden"},
      main: {maxWidth: theme.space.mainWidth, margin: "0 auto"},
      grid: {maxWidth: theme.space.gridWidth, margin: "0 auto"},
    },
    height: {
      full: {height: "100%"},
      auto: {height: "auto"},
    },
    type: {
      cover: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      centered: {
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
};
export const FlexBox = styled("div", style);

const InnerContentEl = styled("div", {
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
const InnerContent = styled("div", {
  variants: {
    width: {
      mobile: {width: "96%"},
      tablet: {width: "88%"},
      desktop: {width: "100%", maxWidth: 1100},
    },
  },
});
