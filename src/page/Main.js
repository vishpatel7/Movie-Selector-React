import React, { useEffect, useState } from "react";
import {
  getFavouritesFromStorage,
  searchMovies,
  setFavouritesInStorage,
} from "../utils";
import {
  FavouriteButton,
  MovieCard,
  MovieListHeading,
  SearchInput,
} from "../components";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    searchMovies(searchValue).then((result) => {
      setMovies(result.entries);
    });
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = getFavouritesFromStorage();
    setFavourites(movieFavourites);
  }, []);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    setFavouritesInStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourites) => favourites.id !== movie.id
    );
    setFavourites(newFavouriteList);
    setFavouritesInStorage(newFavouriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <MovieListHeading
        title="Movies"
        tip="SHIFT + Wheel - To Scroll sideways"
        action={<SearchInput value={searchValue} onChange={setSearchValue} />}
      />
      <div className="row">
        {movies?.map((movie, index) => (
          <MovieCard
            posterSrc={movie.posterSrc}
            footerAction={
              <FavouriteButton onClick={() => addFavouriteMovie(movie)} />
            }
          />
        ))}
      </div>

      <MovieListHeading title="Favourites" />
      <div className="row">
        {favourites?.map((movie, index) => (
          <MovieCard
            posterSrc={movie.posterSrc}
            footerAction={
              <FavouriteButton
                isFavourite
                onClick={() => removeFavouriteMovie(movie)}
              />
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
