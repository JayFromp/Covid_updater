import React from "react";

function DataMapper(props) {
  const stateItems = props.state.map((stateItem) => {
    return <li>{stateItem}</li>;
  });

  return <ul>{stateItems}</ul>;
}

export default DataMapper;
