import React from "react";
import "../css/Header.css";
import NavbarPhoto from "../images/cinema.jpg";
import SearchBar from "./header-components/SearchBar";
import searchFilms from "../api/api";

function Header({ data }) {
  const handleSearch = async (text) => {
    const result = await searchFilms(text);

    data(result);
  };

  return (
    <>
      <header>
        <div className="left-side">
          <img src={NavbarPhoto} alt="" />
        </div>

        <div className="center-side">
          <SearchBar search={handleSearch} />
        </div>

        <div className="right-side"></div>
      </header>
    </>
  );
}

export default Header;
