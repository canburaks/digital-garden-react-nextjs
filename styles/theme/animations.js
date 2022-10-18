import { css, styled, keyframes } from "../stitches.config";

export const fadeUp = keyframes({
  '0%':   { opacity:0,  transform: 'translateY(0px)' },
  '100%': { opacity:1,  transform: 'translateY(80px)' },
});