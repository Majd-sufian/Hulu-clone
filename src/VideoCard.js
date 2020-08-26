import React from "react";
import "./VideoCard.css";

function VideoCad({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original/";
  console.log(base_url + movie.backdrop_path);

  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      <p className="videoCard__des">{movie.overview}</p>
      <h2>{movie.title || movie.original_name}</h2>
      <p>{movie.vote_count}</p>
    </div>
  );
}

export default VideoCad;
