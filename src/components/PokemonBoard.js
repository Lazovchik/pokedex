import React, {Component} from 'react';
import DetailedCardContainer from "./pokemons/containers/DetailedCardContainer";
import NavBar from "./NavBar";

class PokemonBoard extends Component {
    render() {
        return (
            <div className="board">
                <NavBar/>
                <div className="row">
                    <div className="col">
                        <DetailedCardContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default PokemonBoard;