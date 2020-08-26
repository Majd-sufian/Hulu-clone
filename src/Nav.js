import React, { useState, useEffect } from "react";
import "./Nav.css";
import requests from "./requests";

function Nav({ setCurrentNoo3 }) {
  return (
    <div className="lists">
      <h2 onClick={() => setCurrentNoo3(requests.Trending)}>Trending</h2>
      <h2 onClick={() => setCurrentNoo3(requests.TopRated)}>TopRated</h2>
      <h2 onClick={() => setCurrentNoo3(requests.Action)}>Action</h2>
      <h2 onClick={() => setCurrentNoo3(requests.Comedy)}>Comedy</h2>
      <h2>Horror</h2>
      <h2>Romance</h2>
      <h2>Mystey</h2>
      <h2>SciFi</h2>
      <h2>Western</h2>
      <h2>Animation</h2>
      <h2>Movies</h2>
    </div>
  );
}

export default Nav;
