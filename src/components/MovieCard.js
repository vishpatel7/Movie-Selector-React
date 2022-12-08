import React from "react";
import PropTypes from "prop-types";

import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="movie-frame">
      <img src={props.posterSrc} height={420} alt="movie" />
      {props.footerAction ? (
        <div className="footer-overlay">{props.footerAction}</div>
      ) : null}
    </div>
  );
};

MovieCard.propTypes = {
  posterSrc: PropTypes.string.isRequired,
  footerAction: PropTypes.node,
};

export default MovieCard;
