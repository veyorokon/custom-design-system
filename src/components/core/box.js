/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import {borderRadius, themedComponent} from "theme";
import styled from "styled-components";

const Box = themedComponent(
  styled.div`
    ${borderRadius}
  `
);
export default Box;
