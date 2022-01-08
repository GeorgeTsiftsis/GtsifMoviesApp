import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div>
        {props.movies.map((movie, i) => {
          return (
            <>
              <Movie
                key={i}
                viewMovieInfo={props.viewMovieInfo}
                movieId={movie.id}
                original_title={movie.original_title}
                overview={movie.overview}
                image={movie.backdrop_path}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
