import React from "react";
import PropTypes from "prop-types";

import "./SearchInput.css";

const SearchInput = (props) => {
  return (
    <input
      className="search-input"
      onChange={(event) => props.onChange?.(event.target.value)}
      value={props.value}
      placeholder="Type to search..."
    ></input>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
