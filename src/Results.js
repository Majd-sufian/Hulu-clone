import React, { useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import { useEffect } from "react";
import axios from "axios";
import requests from "./requests";

function Results({ currentNoo3 }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://api.themoviedb.org/3";
  console.log(currentNoo3);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${baseURL}${currentNoo3}`)
        .then((response) => response.json())
        .then((data) => {
          setMovies(data.results);
        });
    };

    fetchData();
  }, [currentNoo3]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard movie={movie} />
      ))}
    </div>
  );
}

export default Results;
