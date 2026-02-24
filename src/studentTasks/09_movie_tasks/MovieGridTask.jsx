import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../tasks.css";

export const MovieGridTask = () => {
  const [movieName, setMovieName] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [message, setMessage] = useState("");

  const searchMovies = async () => {
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&s=${movieName}`);
      setMovies(res.data.Search || []);
      setMessage(res.data.Response === "False" ? res.data.Error : "");
    } catch (error) {
      setMessage("error while fetching movies");
    }
  };

  return (
    <div className="task-page">
      <h1>Grid Movie Data</h1>
      <div className="task-form-row">
        <input
          type="text"
          value={movieName}
          placeholder="enter movie name"
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button onClick={searchMovies} style={{ marginLeft: "8px" }}>
          Search
        </button>
      </div>
      <p>{message}</p>

      <div className="task-grid">
        {movies.map((movie) => {
          return (
            <div className="task-card" key={movie.imdbID}>
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>
              {movie.Poster !== "N/A" ? (
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  style={{ width: "120px", height: "160px", objectFit: "cover" }}
                />
              ) : (
                <p>image is missing....</p>
              )}
              <div style={{ marginTop: "8px" }}>
                <Link to={`/student-tasks/moviedetail/${movie.imdbID}`}>Detail</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
