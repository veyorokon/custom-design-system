import React from "react";
import styled from "styled-components";
import {themedComponent} from "theme";
import {Box} from "components/core";

/*
<Tabs>
  <TabHeaders>
    <Tab>SomeName</Tab>
  </TabHeaders>
  <TabContents>
    <Panel>Here is one panel</Panel>
  </TabContents>
</Tabs>
 */

const Tabs = Box;
const TabHeaders = themedComponent(styled.ul``);
const TabContents = themedComponent(styled.div``);
const Tab = themedComponent(styled.li``);
const Panel = Box;

class TabComponent extends React.Component {
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
    return (
      <Tabs>
        <TabHeaders>
          {this.props.tabHeaders.map((elem, index) => {
            return (
              <Tab key={index} onClick={() => this.handleChange(index)}>
                {elem}
              </Tab>
            );
          })}
        </TabHeaders>
        <TabContents>{this.props.children[this.state.selected]}</TabContents>
      </Tabs>
    );
  }
}

export {Tabs, TabHeaders, TabContents, Tab, Panel, TabComponent};
