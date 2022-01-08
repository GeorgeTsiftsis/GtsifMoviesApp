import React from "react";
import Loading from "./Loading";

function MovieInfo(props) {
  const { poster_path, original_title, release_date, overview, vote_average } =
    props.currentMovie;

  return (
    <div className="flex md:flex-row flex-col text-white items-center justify-center ">
      <div>
        {poster_path == null ? (
          <Loading />
        ) : (
          <img
            alt="imageofmovie"
            src={`https://themoviedb.org/t/p/w300/${poster_path}`}
          />
        )}
      </div>
      <div className=" flex flex-col items-center justify-center">
        <h1 className=" text-2xl ">{original_title}</h1>
        <h1 className=" text-xl ">Date Realeased {release_date}</h1>
        <p className="justify-text max-w-2xl p-4  ">{overview}</p>
        <h1 className="py-4">Vote {vote_average} out of 10 </h1>
        <button
          className="bg-blue-500 rounded-2xl py-2 my-8 sm:my-2 px-4 "
          onClick={props.closeMovieInfo}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default MovieInfo;
