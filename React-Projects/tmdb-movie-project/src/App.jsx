import "./css/App.css";
import Header from "./components/Header";
import { useState } from "react";
import FilmList from "./components/FilmList";
import Footer from "./components/Footer";

function App() {
  const [films, setFilms] = useState([]);

  const checkFilms = async (data) => {
    await setFilms(data);
  };

  return (
    <>
      <div className="main">
        <Header data={checkFilms} />

        <FilmList data={films} />
      </div>

      <Footer />
    </>
  );
}

export default App;
