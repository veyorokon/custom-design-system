/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import styled from "styled-components";
import {display, opacity} from "theme";

const HiddenBox = styled.span`
  ${display};
  ${opacity}
  overflow: hidden;
`;

class Hidden extends React.Component {
  getDisplayList = () => {
    const {down, bp} = this.props;
    var displayList = [];
    let i = 0;
    if (down) {
      displayList.push("none");
      for (i = 0; i < bp; i++) {
        displayList.push("none");
      }
      displayList.push("initial");
    } else {
      for (i = 0; i < bp; i++) {
        displayList.push("initial");
      }
      displayList.push("none");
    }
    return displayList;
  };

  render() {
    const {children} = this.props;

    const display = this.getDisplayList();
    return <HiddenBox display={display}>{children}</HiddenBox>;
  }
}

Hidden.defaultProps = {
  up: false,
  down: false
};

export default Hidden;
