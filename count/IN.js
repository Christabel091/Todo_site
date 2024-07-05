import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Coount from "./Count";

class App extends Component {
  state = {
    count: 0,
  };

  incrimentCount = (value) => {
    this.setState((prevCount) => {
      //prevCount can be used implace of this.state as long as it is initialized as a parameter.
      return {
        count: prevCount.count + value,
      };
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>lassroom</h1>
        <Coount counter={this.state.count} />
        <Button incrimentCount={this.incrimentCount} value={1} />
        <Button incrimentCount={this.incrimentCount} value={2} />
        <Button incrimentCount={this.incrimentCount} value={5} />
        <Button incrimentCount={this.incrimentCount} value={10} />
        <Button incrimentCount={this.incrimentCount} value={20} />
        <Button incrimentCount={this.incrimentCount} value={50} />
        <Button incrimentCount={this.incrimentCount} value={100} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
