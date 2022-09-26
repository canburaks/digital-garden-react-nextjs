import { styled } from "../stitches.config";

export const Button = styled("button", {
  fontSize: "$xl",
  borderRadius: "$xl",
  fontWeight: "$semi",
  variants: {
    state: {
      rest: { boxShadow: "$rest" },
      focus: { boxShadow: "$focus" },
    },
  },
  defaultVariants: {
    state: "rest",
  },
});
