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

const background = configure("background", ["bg", "background"], "colors");
const color = configure("color", "color", "colors");

const fontWeight = configure("fontWeight", "fw", "fontWeights");
const fontSize = configure("fontSize", "fs", "fontSizes");
const typography = compose(
  fontWeight,
  fontSize
);

const marginTop = configure("marginTop", ["marginTop", "mt"], "space");
const marginBottom = configure("marginBottom", ["marginBottom", "mb"], "space");
const marginLeft = configure("marginLeft", ["marginLeft", "ml"], "space");
const marginRight = configure("marginRight", ["marginRight", "mr"], "space");
const margin = compose(
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
const padding = compose(
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
);

const generics = compose(
  typography,
  margin,
  padding,
  background,
  color
);

export {
  generics,
  background,
  color,
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
  paddingBottom
};
