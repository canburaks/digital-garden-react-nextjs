const c = 0.125
// export const radii = {
//   none: `${0}px`,
//   xs: `${c * 1}rem`,
//   sm: `${c * 2}rem`,
//   md: `${c * 3}rem`,
//   lg: `${c * 4}rem`,
//   xl: `${c * 8}rem`,
//   full: `${c * 9999}rem`,
// };

const none = {
    radius: {
        measure: 0,
        unit: "Pixels",
        css: "0px",
    },
}
const xs = {
    radius: {
        measure: 4,
        unit: "Pixels",
        css: "4px",
    },
}

const sm = {
    radius: {
        measure: 8,
        unit: "Pixels",
        css: "8px",
    },
}

const md = {
    radius: {
        measure: 12,
        unit: "Pixels",
        css: "12px",
    },
}
const lg = {
    radius: {
        measure: 18,
        unit: "Pixels",
        css: "18px",
    },
}
const xl = {
    radius: {
        measure: 24,
        unit: "Pixels",
        css: "24px",
    },
}
const rounded = {
    radius: {
        measure: 10000,
        unit: "Pixels",
        css: "10000px",
    },
}

function getRadiiValue(radius) {
    return radius.radius.css
}
export const radii = {
    none: getRadiiValue(none),
    xs: getRadiiValue(xs),
    sm: getRadiiValue(sm),
    md: getRadiiValue(md),
    lg: getRadiiValue(lg),
    xl: getRadiiValue(xl),
    rounded: getRadiiValue(rounded),
    squircle: "10% 10% 10% 10% / 10% 10% 18% 10%",
    rem1: "1rem",
    rem05: "0.5rem",
    filter: "8px",
}
