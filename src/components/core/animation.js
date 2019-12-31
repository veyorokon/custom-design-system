/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/
import styled from "styled-components";
import {keyframes} from "styled-components";
import {animationFields} from "theme";
import {themedComponent} from "theme";
/*
    Keyframes
*/
const appear = keyframes`
  from {
    opacity: 0; }
  to {
    opacity: 1; }
`;

const Animate = themedComponent(
  styled.div`
    animation-name: ${props => props.animation};
    ${animationFields};
  `,
  "Animate"
);

Animate.defaultProps = {
  animation: appear,
  ...Animate.defaultProps
};

export default Animate;
export {appear};
