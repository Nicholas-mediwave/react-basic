import "../css/MovielistStyle.css";

const MovieList = ({onDelete, movies}) =>{


    function handleDelete(id) {
      onDelete(id);
    }
  
    return (
      <div className="MoviesListContainer">
        <ul>
          {movies.map(function (movie) {
            return (
              <li key={movie.id}>
                {movie.text}{" "}
                <button onClick={() => handleDelete(movie.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  export default MovieList;