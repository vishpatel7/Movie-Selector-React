const searchMovies = async (query) => {
  const url = `http://www.omdbapi.com/?s=${query}&apikey=ddd1d67b`;
  const response = await fetch(url);
  const responseJSON = await response.json();

  const entries = responseJSON.Search.map((result) => ({
    id: result.imdbID,
    title: result.Title,
    year: result.Year,
    type: result.Type,
    posterSrc: result.Poster,
  }));

  return {
    entries,
    totalResults: responseJSON.totalResults,
  };
};

export default searchMovies;
