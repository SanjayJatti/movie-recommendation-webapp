import React, { useState } from "react";
import "./styles.css";

const moviesList = {
  Romantic: [
    { name: "La La Land",
     description:"Sebastian (Ryan Gosling) and Mia (Emma Stone) are drawn together by their common desire to do what they love. But as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
     rating: "10/10" },
    { name: "Before Sunrise",
    description:"On his way to Vienna, American Jesse meets Celine, a student returning to Paris. After long conversations forge a surprising connection between them, Jesse convinces Celine to get off the train with him in Vienna.They wander the city together. As the night progresses, their bond makes separating in the morning a difficult choice.",
     rating: "9.5/10" },
    { name: "Yeh Jawaani Hai Deewani",
    description:"Kabir and Naina meet during a trekking trip where she falls in love with him but refrains from expressing it. They soon drift apart but end up meeting at a friend's wedding.",
     rating: "8/10" }
  ],
  Action: [
    { name: "Matrix",
    description:"Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
     rating: "10/10" },
    { name: "The Dark Night",
    description:"After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
     rating: "10/10" },
    { name: "Iron Man",
    description:"When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
     rating: "8.5/10" }
  ],
  Comedy: [
    { name: "The Wolf of Wall Street",
    description:"Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",
     rating: "10/10" },
    { name: "Hera Pheri",
    description:"Four lazy friends named Roy, Manav, Aditya and Boman venture out on a race to find a hidden treasure in Goa. However, Inspector Kabir soon learns about their plan and sets out on their trail.",
     rating: "9/10" },
    { name: "Delhi Belly",
    description:"Tashi, Nitin and Arup, three strugglers who are also roommates, unknowingly become the target of a powerful gangster when they misplace his expensive diamonds.",
    rating: "9/10" }
  ],
  SciFi: [
    { name: "Inception",
    description:"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
     rating: "10/10" },
    { name: "Lucy",
    description:"Lucy gains extraordinary physical and mental capabilities after the effects of a performance-enhancing drug set in. Soon, she evolves into a warrior bent on destroying those who held her captive.",
     rating: "10/10" },
    { name: "Her",
    description:"Theodore Twombly, an introverted writer, buys an Artificial Intelligence system to help him write. However, when he finds out about the AI's ability to learn and adapt, he falls in love with it.",
     rating: "9/10" }
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
      <header style={{ display: "block" }}>
        <img
          style={{ maxHeight: "20vh" }}
          src="https://cdn.pixabay.com/photo/2014/04/24/17/22/film-331553__340.png"
        />
      </header>
      <p style={{fontWeight:"bold", fontSize:"1.3rem"}}>
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
      <div className="output">
        <ul style={{ listStyle: "none" }}>
          {moviesList[currentGenre].map((movie) => (
            <li className="genre-list">
             
              <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
             {movie.name}
              </div>
              <div id="description"><span style={{fontWeight:"bold"}}>Film synopsis:</span> {movie. description}</div>
              <div style={{ fontSize: "1rem", fontStyle: "italic", fontWeight:"bold" }}>
            Rating: {movie.rating}
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
