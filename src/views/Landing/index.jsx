import React from "react";
import {Text, Flex, Hidden, Animate, Box, Input} from "components";
import {responsive as r} from "lib";

class Landing extends React.Component {
  render() {
    return (
      <Box>
        <Animate bg={"blacks.0"}>
          <Text h1 fs={r("30px ---> 5rem")} fw="200" color={"whites.0"}>
            Test
          </Text>
        </Animate>

        <Flex p={3}>
          <Input width="50%" />
        </Flex>
        <Hidden down bp={3}>
          <Text
            fs={r("30px ----> 5rem")}
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
