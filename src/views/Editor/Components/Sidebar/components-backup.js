/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Box, Flex, Transition} from "components";
import styled, {css} from "styled-components";
import {Image2} from "styled-icons/remix-line/Image2";
import {PencilRuler} from "styled-icons/remix-line/PencilRuler";

const Panel = styled(Box)`
  box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.26);
  z-index: 10;
`;

const PanelNavigation = styled(Flex)`
  width: 7rem;
  height: 100vh;
`;

const PanelItem = styled(Box)``;
const NavigationItem = styled(Box)`
  height: 7rem;
  padding: 1.75rem 0;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
  ${props =>
    props.active &&
    css`
      background: white;
      color: #f87060;
    `}
`;
const ImageIcon = styled(Image2)`
  height: 100%;
  width: 100%;
`;
const EditIcon = styled(PencilRuler)`
  height: 100%;
  width: 100%;
`;

const Navigation = ({children}) => {
  return (
    <Transition transition={"all"} duration={"0.2s"} function={"ease-in-out"}>
      <PanelNavigation pt={4} flexDirection={"column"} bg={"greens.0"}>
        {children}
      </PanelNavigation>
    </Transition>
  );
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <Panel
        height={"100vh"}
        width={"30rem"}
        bg={"whites.0"}
        color={"blacks.0"}
        m={0}
      >
        <Navigation>
          <NavigationItem active color={"whites.0"}>
            <ImageIcon />
          </NavigationItem>

          <NavigationItem color={"whites.0"}>
            <EditIcon />
          </NavigationItem>
        </Navigation>
      </Panel>
    );
  }
}

export default Sidebar;
