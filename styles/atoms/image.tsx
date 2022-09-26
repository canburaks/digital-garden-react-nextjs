import { styled } from "../stitches.config";

export const Img = styled("img", {
  objectFit: "cover",
  width: "100%",
  height: "100%",
  variants: {
    position: {
      relative: { position: "relative" },
      absolute: { position: "absolute" },
    },
  },
});
