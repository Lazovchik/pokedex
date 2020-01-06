import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {loadPokemonList} from "../../../store/cardlist/actions";
import {loadPokemonDetailedCard} from "../../../store/displayable/actions";
import CardList from "../CardList";

class CardListContainer extends Component {
    render() {
       // console.log(this.props.displayablePokemonId);
        return (
            <CardList
                pokemonsList={this.props.pokemonsList}
                loadPokemonList={this.props.loadPokemonList}
                loadPokemonDetailedCard={this.props.loadPokemonDetailedCard}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        pokemonsList: state.cardList.pokemonsList,
        //idLoad: state.idLoad.displayablePokemonId
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemonList: bindActionCreators(loadPokemonList, dispatch),
        loadPokemonDetailedCard: bindActionCreators(loadPokemonDetailedCard, dispatch)
    };
}

/*const mapDispatchToProps = {
    loadPokemonList
}*/

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer);