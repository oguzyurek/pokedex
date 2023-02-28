import { Component } from "react";
import Pokecard from "./Pokecard";
import "./App.css";

class Pokedex extends Component {

  render() {
    return (
      <div className="pokedex">
        {this.props.pokemon.map((p) => (
          <div key={p.id}>
            <Pokecard
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Pokedex;
