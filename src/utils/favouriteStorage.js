const FAVOURITE_STORAGE_KEY = "react-movie-app-favourites";

export const getFavouritesFromStorage = () =>
  JSON.parse(localStorage.getItem(FAVOURITE_STORAGE_KEY)) || [];

export const setFavouritesInStorage = (items = []) =>
  localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
