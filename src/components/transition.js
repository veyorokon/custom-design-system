import styled from "styled-components";
import {compose} from "styled-system";
import configure from "theme/config";

const transitionDuration = configure("transitionDuration", "duration");
const transitionTimingFunction = configure(
  "transitionTimingFunction",
  "timing"
);
const transitionDelay = configure("transitionDelay", "delay");

const transitionFields = compose(
  transitionDuration,
  transitionTimingFunction,
  transitionDelay
);

const Transition = styled.span`
  transition-property: ${props => props.transition};
  ${transitionFields};
`;

export {Transition};
