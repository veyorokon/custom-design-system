import React from "react";

export default function withTransition(WrappedComponent, config) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...config} {...this.props} />;
    }
  };
}
