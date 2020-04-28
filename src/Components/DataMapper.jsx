import React from "react";

import CountryCard from "./CountryCard";

function DataMapper({ countries }) {
  const countriesList = countries.map((country) => {
    return <CountryCard country={country} />;
  });

  return <ul>{countriesList}</ul>;
}

export default DataMapper;
