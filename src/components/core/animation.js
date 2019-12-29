/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import styled from "styled-components";
import {keyframes} from "styled-components";
import {animationFields} from "theme";
import Box from "./box";
/*
    Keyframes
*/
const appear = keyframes`
  from {
    opacity: 0; }
  to {
    opacity: 1; }
`;

const Animate = styled(Box)`
  animation-name: ${props => props.animation};
  ${animationFields};
`;

Animate.defaultProps = {
  animationFillMode: "both"
};

export default Animate;
export {appear};
