import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = " http://www.omdbapi.com/?apikey=a3c5a0b5";

//api key:a3c5a0b5

const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm]= useState(" ");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    
  setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("interstellar");
  }, []);

  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}></img>
      </div>
      
        {
          movies.length>0
          ? (
            <div className="container">
                   {movies.map((movie)=> (
                     <MovieCard movie={movie} />)
                   )}
                  </div>):(
                    <div className="empty">
                      <h2>No movies found</h2>
                    </div>
                  )
        }

      
      
    </div>
  );

};
export default App;
