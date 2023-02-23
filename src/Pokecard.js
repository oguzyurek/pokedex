import React, { Component } from "react";
import "./App.css";

const POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

class Pokecard extends Component {
  render() {
    let img = `${POKE_API}${this.props.id}.png`;

    return (
      <div className="Pokecard">
        <h3>{this.props.name}</h3>
        <img src={img}></img>
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.base_experience}</div>
      </div>
    );
  }
}

//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png

//
export default Pokecard;
