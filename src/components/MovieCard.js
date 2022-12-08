import React from "react";
import PropTypes from "prop-types";

import "../styles/MovieList.css";

const MovieCard = (props) => {
  return (
    <div className="image-container d-flex movie-frame justify-content-start p-0 m-3">
      <img src={props.posterSrc} height={420} alt="movie" />
      {props.footerAction ? (
        <div className="overlay d-flex align-items-center justify-content">
          {props.footerAction}
        </div>
      ) : null}
    </div>
  );
};

MovieCard.propTypes = {
  posterSrc: PropTypes.string.isRequired,
  footerAction: PropTypes.node,
};

export default MovieCard;
