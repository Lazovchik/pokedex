import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';

import { BrowserRouter,Router, Route, Switch } from 'react-router-dom';


import './styles/App.css';
import NavBar from "./components/NavBar";
import MainBoard from "./components/MainBoard";

import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from './store/reducers';
import DetailedCardContainer from "./components/pokemons/containers/DetailedCardContainer";


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)) );

localStorage.setItem('pokemonsChoice', -2);


class  App extends Component {


    componentDidMount() {

    }

    render() {
        console.log(localStorage.getItem('pokemonsChoice'))
        return (
            <Provider store={store}>
              <div className="App">

                  <NavBar/>
                  <div className="container">
                      {(localStorage.getItem('pokemonsChoice') == -1 )? (
                          <MainBoard/>
                      ) : (
                          <DetailedCardContainer />
                      )}

                  </div>
              </div>
</Provider>
);
  }
}

export default App;
