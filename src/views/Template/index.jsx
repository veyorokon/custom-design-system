import React from "react";
import {Text, Animate, Transition, Hidden} from "components";
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
      <React.Fragment>
        <Text fs={r("30px -> 5rem")} fw="bold" color={"white.0"} bg={"black.0"}>
          <Transition transition={"all"} duration={".3s"}>
            <Animate
              animation={appear}
              duration={".5s"}
              function={"ease-in-out"}
              delay={".2s"}
            >
              Data
            </Animate>
          </Transition>
        </Text>
        <Hidden down bp={3}>
          <Text
            fs={r("30px --> 5rem")}
            fw="bold"
            color={"white.0"}
            bg={"black.0"}
          >
            <Transition transition={"all"} duration={".3s"}>
              <Animate
                animation={appear}
                duration={".5s"}
                function={"ease-in-out"}
                delay={".2s"}
              >
                hidden
              </Animate>
            </Transition>
          </Text>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default Landing;
