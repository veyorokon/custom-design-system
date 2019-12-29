/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import configure from "theme/config";
import {compose} from "styled-system";

/*
     Fields
 */

const width = configure("width", [], "space");
const height = configure("height", [], "space");

const background = configure("background", ["bg", "background"], "colors");
const color = configure("color", "color", "colors");

const fontWeight = configure("fontWeight", "fw", "fontWeights");
const fontSize = configure("fontSize", "fs", "fontSizes");
const lineHeight = configure("lineHeight", "lh");
const typography = compose(
  fontWeight,
  fontSize,
  lineHeight
);

const marginTop = configure("marginTop", ["marginTop", "mt"], "space");
const marginBottom = configure("marginBottom", ["marginBottom", "mb"], "space");
const marginLeft = configure("marginLeft", ["marginLeft", "ml"], "space");
const marginRight = configure("marginRight", ["marginRight", "mr"], "space");
const marginAll = configure("margin", "m", "space");

const margin = compose(
  marginAll,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
);

const paddingTop = configure("paddingTop", ["paddingTop", "pt"], "space");
const paddingBottom = configure(
  "paddingBottom",
  ["paddingBottom", "pb"],
  "space"
);
const paddingLeft = configure("paddingLeft", ["paddingLeft", "pl"], "space");
const paddingRight = configure("paddingRight", ["paddingRight", "pr"], "space");
const paddingAll = configure("padding", "p", "space");

const padding = compose(
  paddingAll,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
);

const transitionDuration = configure("transitionDuration", "duration");
const transitionTimingFunction = configure("transitionTimingFunction");
const transitionDelay = configure("transitionDelay", "delay");

const transition = compose(
  transitionDuration,
  transitionTimingFunction,
  transitionDelay
);

const generics = compose(
  typography,
  margin,
  padding,
  background,
  color,
  width,
  height,
  transition
);

const animationDuration = configure("animationDuration");
const animationTimingFunction = configure("animationTimingFunction");
const animationDelay = configure("animationDelay");
const animationFillMode = configure("animationFillMode");

const animationFields = compose(
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationFillMode
);

const display = configure("display");
const flexGrow = configure("flexGrow");

const borderRadius = configure("borderRadius", ["br"]);
const opacity = configure("opacity");

export {
  generics,
  background,
  color,
  lineHeight,
  typography,
  fontWeight,
  fontSize,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  padding,
  paddingTop,
  paddingLeft,
  paddingRight,
  animationFields,
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationFillMode,
  display,
  flexGrow,
  borderRadius,
  width,
  height,
  paddingBottom,
  transition,
  transitionDuration,
  transitionTimingFunction,
  transitionDelay,
  opacity
};
