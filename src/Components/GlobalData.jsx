import React, { Component } from "react";
import DataMapper from "./DataMapper";
import getGlobalData from "../apiRequests/getRequests";

class GlobalData extends Component {
  state = { globalData: null, countriesData: [] };

  componentDidMount() {
    getGlobalData().then(({ data: { Global, Countries } }) => {
      console.log("in global data");
      this.setState({ globalData: Global, countriesData: Countries });
    });
  }
  render() {
    return (
      <>
        <DataMapper countries={this.state.countriesData} />
      </>
    );
  }
}

export default GlobalData;
