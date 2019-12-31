/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import styled from "styled-components";
import {keyframes} from "styled-components";
import {animationFields} from "theme";
import {Box} from ".";
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
  animationFillMode: "both",
  animation: appear,
  animationDuration: "0.5s",
  animationTimingFunction: "ease-in-out",
  animationDelay: ".2s"
};

export default Animate;
export {appear};
