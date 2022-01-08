import React from "react";

const Movie = (props) => {
  const { original_title, overview, id, image } = props;

  return (
    <div>
      {props.image === null ? (
        ""
      ) : (
        <div className="p-4 flex flex-col   md:flex-row max-w-4xl" key={id}>
          <img
            className="rounded-2xl w-full py-2  md:w-2/4 h-full md:pr-4"
            alt="imageofmovie"
            src={`https://themoviedb.org/t/p/w300/${image}`}
          />
          <div>
            <h1 className="text-white text-2xl ">{original_title}</h1>
            <p className="text-white justify-text line-clamp-4 ">{overview}</p>
            <button
              onClick={() => props.viewMovieInfo(props.movieId)}
              className="bg-red-500 my-4 text-right px-2 py-2 rounded-xl "
            >
              Read More
            </button>
          </div>
          );
        </div>
      )}
    </div>
  );
};

export default Movie;
