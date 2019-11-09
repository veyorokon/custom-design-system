/*
    Author: Vahid Eyorokon

    Utility functions and commonly used fields
*/

/*
    Imports
*/

import styled from "styled-components";

import {generics} from "theme";

function themedComponent(ComponentToLoad, fields = [], withGenerics = true) {
  if (withGenerics)
    return styled(ComponentToLoad)`
      ${fields}
      ${generics}
    `;
  else
    return styled(ComponentToLoad)`
      ${fields}
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
