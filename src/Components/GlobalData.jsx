import React, { Component } from "react";
import DataMapper from "./DataMapper";
class GlobalData extends Component {
  render() {
    const testState = ["hello", "hi", "hey"];
    return (
      <>
        <DataMapper state={testState} />
      </>
    );
  }
}

export default GlobalData;
