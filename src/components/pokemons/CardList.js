import React, {Component} from 'react';
import CardContainer from "./containers/CardContainer";

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
                            <CardContainer
                                name={el.name}
                                url={el.url}
                                key={el.name}
                                loadPokemonDetailedCard={this.props.loadPokemonDetailedCard}
                            />
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