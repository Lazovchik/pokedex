import React, {Component} from 'react';
import Card from "./Card";

class CardList extends Component {

    componentDidMount() {
        this.props.loadPokemonList();
    }

    render() {
        //console.log(this.props)
        return (
            <div>
                { this.props.pokemonsList? (
                    <div className="row">
                        {this.props.pokemonsList.map(el => (
                            <Card key={el.name}/>
                        ))}
                    </div>
                ):(
                    <div>
                        <h1>Loading pokemons...</h1>
                    </div>
                )}
            </div>
        );
    }
}

export default CardList;