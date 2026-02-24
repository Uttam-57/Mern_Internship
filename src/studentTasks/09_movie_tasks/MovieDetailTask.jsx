import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../tasks.css";

export const MovieDetailTask = () => {
  const { imdbid } = useParams();
  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState("");

  const getMovieById = async () => {
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&i=${imdbid}`);
      if (res.data.Response === "False") {
        setMessage(res.data.Error);
        setMovie(null);
        return;
      }
      setMovie(res.data);
      setMessage("");
    } catch (error) {
      setMessage("error while fetching movie detail");
    }
  };

  useEffect(() => {
    getMovieById();
  }, [imdbid]);

  return (
    <div className="task-page">
      <h1>Movie Detail Component</h1>
      <p>IMDB ID from useParams(): {imdbid}</p>
      <p>{message}</p>
      {movie && (
        <div className="task-box">
          <h2>{movie.Title}</h2>
          <p>Year: {movie.Year}</p>
          <p>Genre: {movie.Genre}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Plot: {movie.Plot}</p>
        </div>
      )}
    </div>
  );
};
