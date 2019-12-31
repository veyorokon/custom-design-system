/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import {borderRadius, themedComponent, display, flexGrow} from "theme";
import styled from "styled-components";

const Box = themedComponent(
  styled.div`
    ${borderRadius}
  `
);
const Button = themedComponent(
  styled.button`
    ${borderRadius}
  `
);

const Flex = themedComponent(
  styled.div`
    ${display}
    ${flexGrow}
  `
);
Flex.defaultProps = {
  display: "flex",
  flexGrow: 1
};

const Input = themedComponent(styled.input`
  outline: none;
`);

const Text = themedComponent(styled.p``);

export {Text, Box, Button, Flex, Input};
