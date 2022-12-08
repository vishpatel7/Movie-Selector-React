import React from "react";
import PropTypes from "prop-types";

import "./MovieListHeading.css";

const MovieListHeading = (props) => {
  return (
    <div className="heading-container">
      <div className="title">
        <h1>{props.title} </h1>
        {props.tip ? <span className="tip">{props.tip}</span> : null}
      </div>
      {props.action ? <div className="action">{props.action}</div> : null}
    </div>
  );
};

MovieListHeading.propTypes = {
  title: PropTypes.string.isRequired,
  tip: PropTypes.string,
  action: PropTypes.node,
};

export default MovieListHeading;
