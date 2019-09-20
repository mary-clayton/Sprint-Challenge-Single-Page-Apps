import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import SearchForm from "./components/SearchForm"
import {BrowserRouter as Route} from "react-router-dom";


export default function App() {
  return (
    <main>
      <WelcomePage />
      <SearchForm />
      <Header />
      <CharacterList />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="characters/:id" component={CharacterList}/>
    </main>
  );
}
