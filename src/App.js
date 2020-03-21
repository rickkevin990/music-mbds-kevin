import React from "react";
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import Entete from "./components/Entete";
import Search from "./components/Search"
import ListeAlbum from "./components/ListeAlbum";


import ListMembre from "./components/ListMembre";
function App() {
  let nom = "Hello Madagascar";

  return (
   
    <div className="App">
  
      <BrowserRouter>
      <Search />
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/rock">Groupe Rock</Link>
        <Link to="/ui">Test Material UI</Link>
        &nbsp;
        <Link to="/photos">Photos</Link>
        &nbsp;
        <Link to="/username">Username</Link>
        &nbsp;
        <Link to="/entete/test">Entete</Link>
        <Link to="/albums">list album</Link>
        <Link to="/listMembre ">list Membre</Link>




        <Route exact path="/" component={ListeHobbies}></Route>
        <Route path="/ui" component={TestMaterialUI}></Route>
        <Route path="/photos/:id" component={Photos}></Route>
       
        <Route
          path="/username"
          component={() => <Username name="Michel" age="54" />}
        />
        <Route path="/rock" component={GroupeRock} />
        <Route path="/entete/:name" component={Entete} />
        <Route path="/albums" component={ListeAlbum} />
        <Route path="/listMembre" component={ListMembre} />

      </BrowserRouter>
    </div>
  );
}

export default App;
