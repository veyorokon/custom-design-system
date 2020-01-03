import React from "react";
import {Box, Text, Flex, Hidden, Animate, Input} from "components";
import {responsive as r} from "lib";

class Landing extends React.Component {
  render() {
    return (
      <Box>
        <Animate bg={"blacks.0"}>
          <Text fs={r("30px -> 5rem")} fw="bold" color={"whites.0"}>
            Test
          </Text>
        </Animate>

        <Flex p={3}>
          <Input width="50%" />
        </Flex>
        <Hidden down bp={1}>
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
