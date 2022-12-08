import React from "react";
import PropTypes from "prop-types";

import "../styles/MovieList.css";

const DEFAULT_POSTER_SRC =
  "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg";

const MovieCard = (props) => {
  return (
    <div className="image-container d-flex movie-frame justify-content-start p-0 m-3">
      <img src={props.posterSrc || DEFAULT_POSTER_SRC} alt="movie" />
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
