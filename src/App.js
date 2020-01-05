import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import { BrowserRouter,Router, Route, Switch } from 'react-router-dom';


import './styles/App.css';
import NavBar from "./components/NavBar";
import MainBoard from "./components/MainBoard";

import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from './store/reducers';


const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)) );

const  App = () => {
  return (
      <Provider store={store}>
              <div className="App">

                  <NavBar />
                  <div className="container">
                      <MainBoard />
                  </div>
              </div>
      </Provider>
  );
}

export default App;
