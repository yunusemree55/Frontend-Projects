import React from "react";
import FilmItem from "./FilmItem";
import "../css/Film.css";

function FilmList({ data }) {
  const filmList = data.map((film, index) => {
    return <FilmItem key={index} film={film} />;
  });

  return (
    <>
      <div className="filmList">{filmList}</div>
    </>
  );
}

export default FilmList;
