import React, {Component} from 'react';
import CardList from "./pokemons/CardList";

class MainBoard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <CardList />
                </div>
            </div>
        );
    }
}

export default MainBoard;