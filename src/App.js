import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import './styles/App.css';
import NavBar from "./components/NavBar";
import MainBoard from "./components/MainBoard";

import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from './store/reducers';


const store = createStore(rootReducer );

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
