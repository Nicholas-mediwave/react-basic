import { useState, useEffect } from "react";

//utils
import { getMoviesFromStorage, setMoviesFromStorage } from "../utils";

//components
import AddMovieForm from "../components/AddMovieFrom";
import MovieList from "../components/MoviesList";

const Home = () =>{
    const initialState = [
        { id: 1, text: "The Matrix" },
        { id: 2, text: "The Dark Knight" },
        { id: 3, text: "Ironman" },
      ];
      //const test = `[{"id":1,"text":"The Matrix"},{"id":2,"text":"The Dark Knight"},{"id":3,"text":"Ironman"}]`;
      //console.log(JSON.parse(test));
      const [movies, setMovies] = useState(initialState);
    
      // useEffect(() => {
      //   const movie = getMoviesFromStorage();
      //   if (movie) {
      //     const moviejson = JSON.parse(movie);
      //     setMovies(moviejson);
      //     console.log(moviejson);
      //   }
      // }, []);
      // useEffect(() => {
    
      // }, movies);
    
      // }, [name]);
    
      //to get movies from storage:
      useEffect(() => {
        const movie = getMoviesFromStorage();
        if (movie) {
          const movieJSON = JSON.parse(movie);
          setMovies(movieJSON);
        }
      }, []);
      //to set movies to storage:
      useEffect(() => {
        const movie = JSON.stringify(movies);
        setMoviesFromStorage(movie);
      }, [movies]);
    
      function handleDelete(id) {
        setMovies((prev) => {
          const items = prev.filter((i) => i.id !== id);
          return items;
        });
      }
    
      function handleMovieAdd(name) {
        const movie = {
          id: new Date().getTime(),
          text: name,
        };
    
        const movieList = [...movies];
        movieList.push(movie);
    
        setMovies(movieList);
      }
      return (
        <div className="App">
          <AddMovieForm onAdd={handleMovieAdd} />
          <MovieList movies={movies} onDelete={handleDelete} />
        </div>
      );

}

export default Home;