import { lightColors, Colors } from "./colors"
import { fonts } from "./fonts"
import { fontWeights } from "./font-weights"
import { space } from "./spaces"
import { breakpoints } from "./breakpoints"
import { letterSpacings } from "./letter-spacings"
import { lineHeights } from "./line-heights"
import { radii } from "./radii"
import { shadows } from "./shadows"
import { transitions } from "./transitions"
import { fontSizes } from "./font-sizes"
import { createTheme } from "@stitches/react"
import { CreateStitches } from "@stitches/react"

export const lightThemeConfig = {
    colors: Colors,
    space,
    fonts,
    breakpoints,
    shadows,
    fontSizes,
    fontWeights,
    letterSpacings,
    lineHeights,
    radii,
    transitions,
}
