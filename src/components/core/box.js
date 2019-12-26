/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import {themedComponent} from "lib";
import {borderRadius} from "styled-system";
import styled from "styled-components";

const Box = themedComponent(styled.div``, [borderRadius]);
export default Box;
