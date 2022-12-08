import React from "react";
import PropTypes from "prop-types";

const MovieListHeading = (props) => {
  return (
    <div className="row d-flex align-items-center mt-4 mb-4">
      <div className="col">
        <h1>
          {props.title}{" "}
          {props.tip ? <span className="d-flex h6">{props.tip}</span> : null}
        </h1>
      </div>
      {props.action ? <div className="col col-sm-4">{props.action}</div> : null}
    </div>
  );
};

MovieListHeading.propTypes = {
  title: PropTypes.string.isRequired,
  tip: PropTypes.string,
  action: PropTypes.node,
};

export default MovieListHeading;
