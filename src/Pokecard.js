import React, { Component } from "react";
import "./App.css";

const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

class Pokecard extends Component {
  render() {
    let img = `${POKE_API}${this.props.id}.png`;

    return (
      <div className="Pokecard">
        <h3 className="Pokecard-title">{this.props.name}</h3>
        <div className="Pokecard-image">
          <img src={img} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    );
  }
}

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

//
export default Pokecard;
