import { Component } from "react";
import React from "react";
import "semantic-ui-css";

class Button extends Component {
  incrimentValue = () => {
    this.props.incrimentCount(this.props.value);
  };

  render() {
    return <button onClick={this.incrimentValue}>+{this.props.value}</button>;
  }
}

export default Button;
