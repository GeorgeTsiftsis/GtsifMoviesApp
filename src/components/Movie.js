import React from "react";
import { motion } from "framer-motion";

const Movie = (props) => {
  const { original_title, overview, image, id } = props;

  return (
    <div>
      {props.image === null ? (
        ""
      ) : (
        <div key={id} className="p-4 flex flex-col    md:flex-row max-w-4xl">
          <motion.img
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.2,
                opacity: 0.5,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.7,
                  duration: 2,
                },
              },
            }}
            className="rounded-2xl py-2  md:w-80 h-full md:pr-4"
            alt="imageofmovie"
            src={`https://themoviedb.org/t/p/w300/${image}`}
          />
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-white text-2xl ">{original_title}</h1>
            <p className="text-white justify-text line-clamp-4 ">{overview}</p>
            <button
              onClick={() => props.viewMovieInfo(props.movieId)}
              className="bg-red-500 my-4 text-right px-2 py-2 rounded-xl "
            >
              Read More
            </button>
          </motion.div>
          );
        </div>
      )}
    </div>
  );
};

export default Movie;
