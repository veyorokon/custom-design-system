/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import styled from "styled-components";
import {transition} from "theme";
/*
// TODO: MAKE TRANSITION A HIGHER ORDER COMPONENT
 */

const Transition = styled.span`
  transition-property: ${props => props.transition};
  ${transition};
`;

export default Transition;
