import React, {Component} from 'react';

import Card from "../Card";

class CardContainer extends Component {

    render() {
        return (
            <Card
                name={this.props.name}
                url={this.props.url}
                id={this.props.url.split('/')[this.props.url.split('/').length-2]}
                loadPokemonDetailedCard={this.props.loadPokemonDetailedCard}
            />
        );
    }
}

export default CardContainer;
