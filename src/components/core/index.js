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
  `,
  "Box"
);
const Button = themedComponent(
  styled.button`
    ${borderRadius}
  `,
  "Button"
);

const Flex = themedComponent(
  styled.div`
    ${display}
    ${flexGrow}
  `,
  "Flex"
);

const Input = themedComponent(
  styled.input`
    outline: none;
  `,
  "Input"
);

const Text = themedComponent(styled.p``, "Text");

export {Text, Box, Button, Flex, Input};
