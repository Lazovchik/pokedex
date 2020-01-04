import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

import './styles/App.css';
import NavBar from "./components/NavBar";
import MainBoard from "./components/MainBoard";

const  App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <MainBoard />
      </div>
    </div>
  );
}

export default App;
