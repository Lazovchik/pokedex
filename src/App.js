import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';

import { BrowserRouter,Router, Route, Switch } from 'react-router-dom';


import './styles/App.css';
import NavBar from "./components/NavBar";
import MainBoard from "./components/MainBoard";

import DetailedCardContainer from "./components/pokemons/containers/DetailedCardContainer";


localStorage.setItem('pokemonsChoice', -2);


class  App extends Component {
    render() {
        console.log(localStorage.getItem('pokemonsChoice'))
        return (

              <div className="App">

                  <NavBar/>
                  <MainBoard />
                  {/*<div className="container">
                      {(localStorage.getItem('pokemonsChoice') == -1 )? (
                          <MainBoard/>
                      ) : (
                          <DetailedCardContainer />
                      )}

                  </div>*/}
              </div>
);
  }
}

export default App;
