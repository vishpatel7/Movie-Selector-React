const DEFAULT_POSTER_SRC =
  "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg";

const searchMovies = async (query) => {
  const url = `http://www.omdbapi.com/?s=${query}&apikey=ddd1d67b`;
  const response = await fetch(url);
  const responseJSON = await response.json();

  const entries = responseJSON.Search.map((result) => ({
    id: result.imdbID,
    title: result.Title,
    year: result.Year,
    type: result.Type,
    posterSrc: result.Poster.startsWith("http")
      ? result.Poster
      : DEFAULT_POSTER_SRC,
  }));

  return {
    entries,
    totalResults: responseJSON.totalResults,
  };
};

export default searchMovies;
