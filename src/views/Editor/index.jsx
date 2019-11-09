import React from "react";
import {Text, Hidden} from "components";
import {responsive as r} from "lib";

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Text
          fs={r("30px -> 5rem")}
          fw="bold"
          color={"whites.0"}
          bg={"blacks.0"}
        >
          Data
        </Text>
        <Hidden down bp={3}>
          <Text
            fs={r("30px --> 5rem")}
            fw="bold"
            color={"whites.0"}
            bg={"blacks.0"}
          >
            hidden
          </Text>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default Landing;
