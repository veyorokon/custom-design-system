/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import {themedComponent} from "lib";
import styled from "styled-components";
import {display, flexGrow} from "theme";

const Flex = themedComponent(styled.div``, [display, flexGrow]);
Flex.defaultProps = {
  display: "flex",
  flexGrow: 1
};

export default Flex;
