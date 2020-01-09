import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./store/reducers";
import thunk from "redux-thunk";

//routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

import PokemonBoard from "./components/PokemonBoard";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(thunk)) );

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/pokemon/:id" component={PokemonBoard} />
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

serviceWorker.unregister();
