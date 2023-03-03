import React, { Component } from "react";
import Pokegame from "./Pokegame";
import Game from "./Game";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
        <Game />
      </div>
    );
  }
}

export default App;
