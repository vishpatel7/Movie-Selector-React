import React from "react";
import PropTypes from "prop-types";

const FavouriteButton = (props) => {
  return (
    <div role="button" onClick={props.onClick}>
      <span>
        {props.isFavourite ? "Remove from Favorites" : "Add to Favorites"}
      </span>{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-bookmark-heart"
        viewBox="0 0 16 16"
      >
        {props.isFavourite ? (
          <path
            fillRule="evenodd"
            d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
          />
        ) : (
          <path
            fillRule="evenodd"
            d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
          />
        )}
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      </svg>
    </div>
  );
};

FavouriteButton.propTypes = {
  isFavourite: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default FavouriteButton;
