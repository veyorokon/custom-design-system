import React from "react";
import {Text, Hidden, Transition, Animate, Box, Input} from "components";
import {responsive as r} from "lib";
import {keyframes} from "styled-components";

const appear = keyframes`
  from {
    opacity: 0; }
  to {
    opacity: 1; }
`;

class Landing extends React.Component {
  render() {
    return (
      <Box>
        <Text
          fs={r("30px -> 5rem")}
          fw="bold"
          color={"whites.0"}
          bg={"blacks.0"}
        >
          <Transition transition={"all"} duration={".3s"}>
            <Animate
              animation={appear}
              animationDuration={".5s"}
              animationTimingFunction={"ease-in-out"}
              animationDelay={".2s"}
            >
              Test
            </Animate>
          </Transition>
        </Text>
        <Box>
          <Input width="50%" />
        </Box>
        <Hidden down bp={3}>
          <Text
            fs={r("30px --> 5rem")}
            fw="bold"
            color={"whites.0"}
            bg={"blacks.0"}
          >
            Hidden
          </Text>
        </Hidden>
      </Box>
    );
  }
}

export default Landing;
