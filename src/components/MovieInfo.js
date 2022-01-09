import React from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";

function MovieInfo(props) {
  const { poster_path, original_title, release_date, overview, vote_average } =
    props.currentMovie;

  return (
    <div
      style={{ height: "900px" }}
      className="flex md:flex-row  flex-col text-white items-center justify-center "
    >
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
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={({ delay: 0.7 }, { yoyo: 800 })}
          className=" text-xl text-red-700 "
        >
          Date Realeased {release_date}
        </motion.h1>
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
