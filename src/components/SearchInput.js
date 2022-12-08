import React from "react";
import PropTypes from "prop-types";

const SearchInput = (props) => {
  return (
    <input
      className="form-control"
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
