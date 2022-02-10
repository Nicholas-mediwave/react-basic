export const getMoviesFromStorage = () => {
  return localStorage.getItem("movie");
};

export const setMoviesFromStorage = (movie) => {
  return localStorage.setItem("movie", movie);
};
