import { Component } from "react";
import Pokecard from "./Pokecard";
import "./App.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
    ],
  };
  render() {
    return (
      <div>
        <div></div>
        <p>Total Experience: {this.props.exp}</p>
        <div>
          <h2 className={this.props.isWinner ? "Winner" : "Loser"}>
            {this.props.isWinner ? "Winning Hand" : "Losing Hand"}
          </h2>
        </div>
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
      </div>
    );
  }
}

export default Pokedex;
