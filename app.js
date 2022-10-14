import React from "react";
import "./styles.css";
import { useState } from "react";

const food = {
  southIndian: [
    {
      name: "masala dosa",
      rating: "4.5 / 5",
      state: "karnataka"
    },
    {
      name: "idli sambhar",
      rating: "4 / 5",
      state: "Tamil nadu"
    },
    {
      name: "Holige",
      rating: "4.8 / 5",
      state: "karnataka"
    }
  ],

  northIndian: [
    {
      name: "Daal bati churma",
      rating: "4.7 / 5",
      state: "Rajastan"
    },
    {
      name: "litti chokha",
      rating: "3.8 / 5",
      state: "Bihar"
    }
  ],
  japanese: [
    {
      name: "Shushi",
      rating: "4.5 / 5",
      state: "Tokyo"
    },
    {
      name: "Tofu",
      rating: "4.3 / 5",
      state: "Chubu"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("southIndian");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> food suggestion </h1>
      <p style={{ fontSize: "smaller" }}>
        “Life is uncertain. Eat dessert first.”
      </p>

      <div>
        {Object.keys(food).map((genre) => (
          <button onClick={() => genreClickHandler(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {food[selectedGenre].map((dish) => (
            <li
              key={dish.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}> {dish.name} </div>
              <div style={{ fontSize: "smaller" }}>State - {dish.state}</div>
              <div style={{ fontSize: "smaller" }}>rating - {dish.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
