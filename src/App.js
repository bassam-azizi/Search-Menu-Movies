import React, { Component } from "react";
import Movie from "./components/movie";
import "./styles/main.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="input-container">
          <label>Search for Movie </label>
          <input type="text" />
        </div>
        <div className="movies-container">
          <Movie />
        </div>
      </div>
    );
  }
}

export default App;
