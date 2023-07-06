import React, { useState } from "react";
import WhitePhoto from "../images/white.jpg";

function FilmItem({ film }) {
  const src =
    film.poster_path != null
      ? `http://image.tmdb.org/t/p/w500/${film.poster_path}`
      : WhitePhoto;

  const releaseDate =
    film.release_date != "" ? `Release Date: ${film.release_date}` : "";

  return (
    <>
      <div className="card">
        <div className="photo-side">
          <img className="photo" src={src} alt="" />
        </div>
        <div className="content-side">
          <h4>{film.title}</h4>

          <div className="detail-side">
            <small>{releaseDate}</small>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilmItem;
