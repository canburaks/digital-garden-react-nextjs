// stitches.config.ts

import { createStitches } from "@stitches/react"
import { lightThemeConfig } from "./theme"

const { styled, css, globalCss, keyframes, getCssText, theme, config } =
    createStitches({
        prefix: "cbs",
        theme: lightThemeConfig,
        media: {
            xs: "(min-width: 300px)",
            sm: "(min-width: 480px)",
            md: "(min-width: 768px)",
            lg: "(min-width: 1024px)",
            xl: "(min-width: 1280px)",
            xxl: "(min-width: 1536px)",
        },
        utils: {
            size: (value) => ({
                width: value,
                height: value,
            }),
        },
    })

const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        lineHeight: 1.5,
        fontFamily: "General Sans Variable",
    },
    html: { height: "100%" },
    body: { height: "100%" },
    "img, picture, video, canvas, svg": {
        display: "block",
        maxWidth: "100%",
    },
    "input, button, textarea, select": {
        font: "inherit",
    },
    "p, h1, h2, h3, h4, h5, h6, span, li": {
        overflowWrap: "break-word",
    },
})

export {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    globalStyles,
    config,
}

//console.log("fs", fs.readdirSync("src/client/public/stylesheets"))
/*
export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  '@font-face': {
    fontFamily: 'Cormorant',
    src: 'local("Cormorant"), url("Cormorant.ttf")',
  },
});
*/
