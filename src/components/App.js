import React, { useState } from "react";
import MovieList from "./MovieList";
import NavBar from "./NavBar";
import SearchArea from "./SearchArea";
import Pagination from "./Pagination";
import MovieInfo from "./MovieInfo";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, getSearchTerm] = useState("");
  const [totalResults, getTotalResults] = useState(0);
  const [currentPage, getCurrentPage] = useState(1);
  const [currentMovie, getCurrentMovie] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e38a8e0e5cfb85c047e2aa07b2a8f6c2&language=en-US&sort_by=popularity.desc&include_adult=false&query=${searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        setMovies([...data.results]);
        getTotalResults(data.total_results);
      });
  };
  console.log(movies);

  const handleChange = (e) => {
    getSearchTerm(e.target.value);
  };

  const nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e38a8e0e5cfb85c047e2aa07b2a8f6c2&language=en-US&sort_by=popularity.desc&include_adult=false&query=${searchTerm}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        setMovies([...data.results]);
        getCurrentPage(pageNumber);
      });
  };

  const viewMovieInfo = (id) => {
    const filteredMovie = movies.filter((movie) => movie.id === id);

    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null;

    getCurrentMovie(newCurrentMovie);
  };

  const closeMovieInfo = () => {
    getCurrentMovie(null);
  };

  const numberPages = Math.floor(totalResults / 20);

  return (
    <div className="flex flex-col items-center bg-black  ">
      <NavBar />
      {currentMovie == null ? (
        <div>
          <SearchArea handleSubmit={handleSubmit} handleChange={handleChange} />{" "}
          <MovieList viewMovieInfo={viewMovieInfo} movies={movies} />
        </div>
      ) : (
        <MovieInfo
          currentMovie={currentMovie}
          closeMovieInfo={closeMovieInfo}
        />
      )}

      {totalResults > 20 && currentMovie == null ? (
        <Pagination
          pages={numberPages}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default App;
