import React from "react";

function HomeScreenDetails() {
  return (
    <div className="flex flex-col text-white items-center justify-center">
      <img src={"./cinema.jpeg"} alt="cinema" />
      <h1 className="max-w-2xl p-4  mb-32 md:pb-2 py-28 h-80">
        A page in which a user could search for a movie and learn details about
        it. Built it with React and TailwindCSS. Utilise
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline ml-1 "
          href="https://www.themoviedb.org/"
        >
          The Movie Database API
        </a>
      </h1>
    </div>
  );
}

export default HomeScreenDetails;
