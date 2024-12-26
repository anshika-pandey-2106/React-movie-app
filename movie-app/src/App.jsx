import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = " http://www.omdbapi.com/?apikey=a3c5a0b5";
const movie1 = {
  Title: "Interstellar",
  Year: "2014",
  imdbID: "tt0816692",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_SX300.jpg",
};
//api key:a3c5a0b5

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  };
  const [] = useState([]);

  useEffect(() => {
    searchMovies("interstellar");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value="superman"
          onChange={() => {}}
        ></input>
        <img src={SearchIcon} alt="search" onClick={() => {}}></img>
      </div>
      <div className="container">
       <MovieCard movie1={movie1} />
      </div>
    </div>
  );
};
export default App;
