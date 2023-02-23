import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./index.css";
import pokemons from "./Pokemons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard
          id="1"
          img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          name="Charmander"
          type="fire"
          base_experience={62}
        />
      </div>
    );
  }
}

export default App;
