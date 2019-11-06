import styled from "styled-components";
import {compose} from "styled-system";
import configure from "theme/config";

const animationDuration = configure("animationDuration", "duration");
const animationTimingFunction = configure("animationTimingFunction", "timing");
const animationDelay = configure("animationDelay", "delay");
const animationFillMode = configure("animationFillMode", "fillMode");

const animationFields = compose(
  animationDuration,
  animationTimingFunction,
  animationDelay,
  animationFillMode
);

const Animate = styled.span`
  animation-name: ${props => props.animation};
  ${animationFields};
`;

Animate.defaultProps = {
  fillMode: "both"
};

export {Animate};
