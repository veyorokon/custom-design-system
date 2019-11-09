/*
    Author: Vahid Eyorokon
*/

/*
    Imports
*/

import React from "react";
import {Flex} from "components";
import Sidebar from "./Components/Sidebar";
import View from "./Components/View";

class Editor extends React.Component {
  render() {
    return (
      <Flex>
        <Sidebar></Sidebar>
        <View>Editor space</View>
      </Flex>
    );
  }
}

export default Editor;
