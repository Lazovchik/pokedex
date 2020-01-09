import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from 'react';

import './styles/App.css';
import NavBar from "./components/NavBar";
import MainBoard from "./components/MainBoard";


class  App extends Component {
    render() {
        return (
              <div className="App">
                  <NavBar/>
                  <MainBoard />
              </div>
        );
  }
}

export default App;
