import React from "react";
import {Text, Flex, Hidden, Animate, Box, Input} from "components";
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
        <Animate
          animation={appear}
          animationDuration={".5s"}
          animationTimingFunction={"ease-in-out"}
          animationDelay={".2s"}
          bg={"blacks.0"}
        >
          <Text
            transition={"all"}
            transitionDuration={".3s"}
            fs={r("30px -> 5rem")}
            fw="bold"
            color={"whites.0"}
          >
            Test
          </Text>
        </Animate>

        <Flex p={3}>
          <Input width="50%" />
        </Flex>
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
