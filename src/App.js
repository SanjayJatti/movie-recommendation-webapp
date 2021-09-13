import React, { useState } from "react";
import "./styles.css";

const moviesList = {
  Romantic: [
    { name: "La La Land", rating: "10/10" },
    { name: "Before Sunrise", rating: "9.5/10" },
    { name: "Yeh Jawaani Hai Deewani", rating: "8/10" }
  ],
  Action: [
    { name: "Matrix", rating: "10/10" },
    { name: "The Dark Night", rating: "10/10" },
    { name: "Iron Man", rating: "8.5/10" }
  ],
  Comedy: [
    { name: "The Wolf of Wall Street", rating: "10/10" },
    { name: "Hera Pheri", rating: "9/10" },
    { name: "Delhi Belly", rating: "9/10" }
  ],
  SciFi: [
    { name: "Inception", rating: "10/10" },
    { name: "Lucy", rating: "10/10" },
    { name: "Her", rating: "9/10" }
  ]
};

export default function App() {
  const [currentGenre, setGenre] = useState("Romantic");
  function genreClickHandler(category) {
    setGenre(category);
  }
  return (
    <div className="App">
      <nav className="navigation">
        <h1>Movie Recommendation</h1>
      </nav>
      <header class="container" style={{ display: "block" }}>
        <img
          style={{ maxHeight: "20vh" }}
          src="https://cdn.pixabay.com/photo/2014/04/24/17/22/film-331553__340.png"
        />
      </header>
      <p className="container">
        Here's my personal list of favourite movies.
        <br /> Please select genre below.
      </p>

      <div className="category">
        {Object.keys(moviesList).map((category) => (
          <button onClick={() => genreClickHandler(category)}>
            {category}
          </button>
        ))}
      </div>
      <div
        style={{
          backgroundColor: " RGB(219, 97, 53)",
          padding: "0.1rem",
          margin: "1rem"
        }}
      >
        <ul style={{ listStyle: "none" }}>
          {moviesList[currentGenre].map((movie) => (
            <li>
              {""}
              <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                {" "}
                {movie.name}{" "}
              </div>
              <div style={{ fontSize: "0.7rem", fontStyle: "italic" }}>
                {" "}
                {movie.rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <p>
          "Hope is good thing, May be best of things, And no good thing ever
          dies"
          <br />
          -Shawshank Redemption
        </p>
      </footer>
    </div>
  );
}
