const shadowLevel9 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 40,
    unit: "Pixels",
    css: "40px",
  },
  radius: {
    measure: 55,
    unit: "Pixels",
    css: "55px",
  },
  spread: {
    measure: -11,
    unit: "Pixels",
    css: "-11px",
  },
  color: "#00000024",
};
const shadowLevel8 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 24,
    unit: "Pixels",
    css: "24px",
  },
  radius: {
    measure: 33,
    unit: "Pixels",
    css: "33px",
  },
  spread: {
    measure: -9,
    unit: "Pixels",
    css: "-9px",
  },
  color: "#0000001f",
};
const shadowLevel7 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 16,
    unit: "Pixels",
    css: "16px",
  },
  radius: {
    measure: 25,
    unit: "Pixels",
    css: "25px",
  },
  spread: {
    measure: -7,
    unit: "Pixels",
    css: "-7px",
  },
  color: "#0000001f",
};
const shadowLevel6 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 12,
    unit: "Pixels",
    css: "12px",
  },
  radius: {
    measure: 19,
    unit: "Pixels",
    css: "19px",
  },
  spread: {
    measure: -5,
    unit: "Pixels",
    css: "-5px",
  },
  color: "#0000001a",
};
const shadowLevel5 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 8,
    unit: "Pixels",
    css: "8px",
  },
  radius: {
    measure: 11,
    unit: "Pixels",
    css: "11px",
  },
  spread: {
    measure: -3,
    unit: "Pixels",
    css: "-3px",
  },
  color: "#0000001a",
};
const shadowLevel4 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 6,
    unit: "Pixels",
    css: "6px",
  },
  radius: {
    measure: 7,
    unit: "Pixels",
    css: "7px",
  },
  spread: {
    measure: -2,
    unit: "Pixels",
    css: "-2px",
  },
  color: "#0000001a",
};
const shadowLevel3 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 4,
    unit: "Pixels",
    css: "4px",
  },
  radius: {
    measure: 5,
    unit: "Pixels",
    css: "5px",
  },
  spread: {
    measure: -1,
    unit: "Pixels",
    css: "-1px",
  },
  color: "#0000001a",
};
const shadowLevel2 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 2,
    unit: "Pixels",
    css: "2px",
  },
  radius: {
    measure: 3,
    unit: "Pixels",
    css: "3px",
  },
  spread: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  color: "#0000001a",
};
const shadowLevel1 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 1,
    unit: "Pixels",
    css: "1px",
  },
  radius: {
    measure: 1,
    unit: "Pixels",
    css: "1px",
  },
  spread: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  color: "#0000001a",
};
const inner3 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 4,
    unit: "Pixels",
    css: "4px",
  },
  radius: {
    measure: 4,
    unit: "Pixels",
    css: "4px",
  },
  spread: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  color: "#0000001a",
};
const inner2 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 2,
    unit: "Pixels",
    css: "2px",
  },
  radius: {
    measure: 2,
    unit: "Pixels",
    css: "2px",
  },
  spread: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  color: "#0000001a",
};
const inner1 = {
  offsetX: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  offsetY: {
    measure: 1,
    unit: "Pixels",
    css: "1px",
  },
  radius: {
    measure: 1,
    unit: "Pixels",
    css: "1px",
  },
  spread: {
    measure: 0,
    unit: "Pixels",
    css: "0px",
  },
  color: "#0000001a",
};

function convertToCss(shadow: any) {
  return `${shadow.offsetX.css} ${shadow.offsetY.css} ${shadow.radius.css} ${shadow.spread.css} ${shadow.color}`;
}

export const shadows = {
  drop1: convertToCss(shadowLevel1),
  drop2: convertToCss(shadowLevel2),
  drop3: convertToCss(shadowLevel3),
  drop4: convertToCss(shadowLevel4),
  drop5: convertToCss(shadowLevel5),
  drop6: convertToCss(shadowLevel6),
  drop7: convertToCss(shadowLevel7),
  drop8: convertToCss(shadowLevel8),
  drop9: convertToCss(shadowLevel9),
  inset0: "inset 0 0 2px 1px rgba(0,0,0,0.15)",
  inset1: `inset ${convertToCss(inner1)}`,
  inset2: `inset ${convertToCss(inner2)}`,
  inset3: `inset ${convertToCss(inner3)}`,

  rest: "0px 0px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.1)",
  focus: `
      0px 0px 1px 3px rgba(168, 85, 247, 0.2),
      0px 0px 2px 1px rgba(0, 0, 0, 0.08),
      0px 0px 2px rgba(0, 0, 0, 0.15),
      0px 1px 2px rgba(0, 0, 0, 0.1)
    `,
  toggle: `
      0px 9px 25px rgb(27 39 81 / 7%), 0px 3.75998px 10.4444px rgb(27 39 81 / 10%),
      0px 2.01027px 5.58408px rgb(27 39 81 / 12%), 0px 1.12694px 3.13039px rgb(27 39 81 / 14%),
      0px 0.249053px 0.691814px rgb(27 39 81 / 4%), inset 0px 1px 2px 1px rgb(255 255 255 / 10%)
      `,
  filter:
    "0px 1px 2px 0px hsla(250, 100%, 75%, 0.1), 0px 0px 2px 0px hsla(250, 100%, 75%, 0.1)",
};
