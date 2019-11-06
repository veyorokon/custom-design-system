import styled, {css} from "styled-components";
import {
  layout,
  typography,
  margin,
  padding,
  space,
  color,
  compose
} from "styled-system";
import {fontWeight, fontSize} from "theme";

const fontFields = compose(
  fontWeight,
  fontSize
);
const defaultFields = compose(
  layout,
  typography,
  margin,
  padding,
  space,
  color
);

const genericFields = css`
  ${defaultFields}
  ${fontFields}
`;

function themedComponent(ComponentToLoad, fields = []) {
  return styled(ComponentToLoad)`
    ${fields}
    ${genericFields}
  `;
}

function formatValues(values) {
  let fmt;
  fmt = values.replace(/x-/g, "x -");
  fmt = fmt.replace(/m-/g, "m -");
  fmt = fmt.replace(/%-/g, "% -");
  fmt = fmt.replace(/l-/g, "l -");
  fmt = fmt.split(">").join(" ");

  if (fmt[0] === "-") {
    fmt = fmt.replace("-", "initial ");
  }
  fmt = fmt.split(" ");

  fmt = fmt.filter(elem => elem !== "");
  return fmt;
}

function responsive(values) {
  let fmt = formatValues(values);
  let output = [];
  let lastElem = fmt[0];

  fmt.forEach(function(value) {
    if (value.includes("-")) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === "-") {
          output.push(lastElem);
        }
      }
    } else {
      if (+value) {
        output.push(+value);
        lastElem = +value;
      } else {
        output.push(value);
        lastElem = value;
      }
    }
  });
  return output;
}

export {themedComponent, responsive};
