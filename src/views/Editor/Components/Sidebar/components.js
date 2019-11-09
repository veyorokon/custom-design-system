/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Box, Flex, TabHeaders, TabComponents} from "components";
import styled, {css} from "styled-components";
import {Image2} from "styled-icons/remix-line/Image2";
import {PencilRuler} from "styled-icons/remix-line/PencilRuler";
import {Layout} from "styled-icons/remix-line/Layout";

const Menu = styled(Flex)`
  box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.26);
  z-index: 10;
`;

const PanelNavigation = styled(Box)`
  width: 7rem;
  height: 100vh;
`;

const PanelItem = styled(Box)``;
const NavigationItem = styled(Box)`
  height: 7rem;
  padding: 1.75rem 0;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
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
const LayoutIcon = styled(Layout)`
  height: 100%;
  width: 100%;
`;

const NavigationTabComponents = styled(TabComponents)`
  width: 100%;
  padding: 0 1rem;
  width: 24rem;
`;

const NavigationTabItem = styled(NavigationItem)``;

const Navigation = ({children}) => {
  return (
    <PanelNavigation pt={4} flexDirection={"column"} bg={"greens.0"}>
      {children}
    </PanelNavigation>
  );
};

class NavigationTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected || 0
    };
  }

  getInitialState() {
    return {
      selected: this.props.selected || 0
    };
  }

  handleChange = index => {
    this.setState({selected: index});
  };

  render() {
    const {selected} = this.state;
    return (
      <React.Fragment>
        <TabHeaders>
          <Navigation>
            {this.props.tabHeaders.map((elem, index) => {
              return (
                <NavigationTabItem
                  onClick={() => this.handleChange(index)}
                  color={"whites.0"}
                  key={index}
                  active={selected === index}
                >
                  {elem}
                </NavigationTabItem>
              );
            })}
          </Navigation>
        </TabHeaders>
        <NavigationTabComponents>
          {this.props.children[this.state.selected]}
        </NavigationTabComponents>
      </React.Fragment>
    );
  }
}

const OptionHeader = styled(Box)`
  font-size: 2.4rem;
  text-align: center;
  color: white;
  font-weight: 400;
  line-height: 1.5;
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    return (
      <Menu
        height={"100vh"}
        width={"fit-content"}
        bg={"whites.0"}
        color={"blacks.0"}
        m={0}
      >
        <NavigationTabs
          selected={0}
          tabHeaders={[<ImageIcon />, <EditIcon />, <LayoutIcon />]}
        >
          <OptionHeader margin={" 1rem auto"} bg={"oranges.0"}>
            Image
          </OptionHeader>
          <OptionHeader margin={" 1rem auto"} bg={"oranges.0"}>
            Draw
          </OptionHeader>
          <OptionHeader margin={" 1rem auto"} bg={"oranges.0"}>
            View
          </OptionHeader>
        </NavigationTabs>
      </Menu>
    );
  }
}

export default Sidebar;
