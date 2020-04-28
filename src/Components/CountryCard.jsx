import React, { Component } from "react";

class CountryCard extends Component {
  render() {
    const {
      Country,
      NewConfirmed,
      TotalConfirmed,
      NewDeaths,
      TotalDeaths,
      NewRecovered,
      TotalRecovered,
      Date,
    } = this.props.country;

    return <>{<p>{Country}</p>}</>;
  }
}

export default CountryCard;

/* 
Country: "ALA Aland Islands"
CountryCode: "AX"
Slug: "ala-aland-islands"
NewConfirmed: 0
TotalConfirmed: 0
NewDeaths: 0
TotalDeaths: 0
NewRecovered: 0
TotalRecovered: 0
Date: "2020-04-28T18:19:08Z
*/
