function Pagination(props) {
  const pageLinks = [];

  for (let i = 1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? "bg-blue-400" : "";

    pageLinks.push(
      <li
        className={`${active}   text-white mx-1  p-2 rounded`}
        key={i}
        onClick={() => props.nextPage(i)}
      >
        <button>{i} </button>
      </li>
    );
  }
  return (
    <div className="flex  bg-black items-center justify-center">
      <ul className="flex items-center justify-center">
        {pageLinks.slice(0, 10)}
      </ul>
    </div>
  );
}

export default Pagination;
