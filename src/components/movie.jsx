import React from "react";

const Movie = props => {
  return (
    <div className="movie-container">
      <div className="movie-image" />
      <p className="movie-title">{props.title}</p>
      <p className="movie-year">{props.year}</p>
    </div>
  );
};

export default Movie;
