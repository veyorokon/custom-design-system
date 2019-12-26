/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import styled from "styled-components";
import {keyframes} from "styled-components";
import {animationFields} from "theme";
/*
    Keyframes
*/
const appear = keyframes`
  from {
    opacity: 0; }
  to {
    opacity: 1; }
`;

const Animate = styled.span`
  animation-name: ${props => props.animation};
  ${animationFields};
`;

Animate.defaultProps = {
  animationFillMode: "both"
};

export default Animate;
export {appear};
