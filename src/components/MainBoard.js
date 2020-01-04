import React, {Component} from 'react';
import CardList from "./pokemons/CardList";
import CardListContainer from "./pokemons/containers/CardListContainer";

class MainBoard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <CardListContainer />
                </div>
            </div>
        );
    }
}

export default MainBoard;