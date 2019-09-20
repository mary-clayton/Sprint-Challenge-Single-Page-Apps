import React, {
  useEffect,
  useState
} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import {Row, Container} from 'reactstrap'

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        // console.log(res.data);
        const characters = res.data;
        setCharacter(characters);
      })
      .catch(err => {
        console.log("It's just an error lol", err)
      })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  if (!character.results) {
    return (
      <div>
        <h2>Fetching required data</h2>
        <p>This should only take a moment to fetch the data.</p>
      </div>
    );
  }
  return (
    <section className="character-list">
      <h2>Characters</h2>
      <Container>
        <Row className="rows"> 
          {character.results.map((character, index) => {
            return (<CharacterCard key={index} {...character} />)
          })}
        </Row>
      </Container>
    </section>
  );
}
  
export default CharacterList;