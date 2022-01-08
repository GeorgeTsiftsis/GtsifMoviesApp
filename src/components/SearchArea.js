import React from "react";

function SearchArea(props) {
  return (
    <div className="flex  items-center justify-center">
      <input
        className="bg-slate-300 p-2 rounded-md"
        placeholder="Search Here"
        onChange={props.handleChange}
        type="text"
      />
      <button
        className="bg-red-500 ml-2 rounded-md   p-2"
        onClick={props.handleSubmit}
      >
        Search
      </button>
    </div>
  );
}

export default SearchArea;
