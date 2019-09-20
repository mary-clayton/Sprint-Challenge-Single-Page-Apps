import React from "react";
import {NavLink} from "react-router-dom";

function CharacterCard(props) {
  // return <span>todo: character</span>;
  console.log(props);
  return (
    <div className="charactercard">
      <NavLink className= "links" exact to={`/characters/${props.id}`}>
        <div className="card">
      <img src={props.image} alt="character"/>
      <h1>Name: {props.name}</h1>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
      <p>species: {props.species}</p>
      </div>
      </NavLink>
    </div>
  )
}


export default CharacterCard;