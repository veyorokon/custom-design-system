/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import {themedComponent} from "theme";
import styled from "styled-components";
import {borderRadius} from "theme";

const Button = themedComponent(
  styled.button`
    ${borderRadius}
  `
);

export default Button;
