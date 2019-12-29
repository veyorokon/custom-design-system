/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import {themedComponent} from "theme";
import {borderRadius} from "theme";
import styled from "styled-components";

const Box = themedComponent(
  styled.div`
    ${borderRadius}
  `
);
export default Box;
