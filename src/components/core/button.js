/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import {themedComponent} from "lib";
import styled from "styled-components";
import {borderRadius} from "theme";

const Button = themedComponent(styled.button``, [borderRadius]);

export default Button;
