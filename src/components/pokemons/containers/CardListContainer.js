import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {loadPokemonList} from "../../../store/cardlist/actions";

import CardList from "../CardList";



class CardListContainer extends Component {
    render() {

        return (
            <CardList pokemonsList={this.props.pokemonsList}  loadPokemonList={this.props.loadPokemonList}  />
        );
    }
}

const mapStateToProps = state => {
    return {
        pokemonsList: state.cardList.pokemonsList
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemonList: bindActionCreators(loadPokemonList, dispatch)
    };
}

/*const mapDispatchToProps = {
    loadPokemonList
}*/

export default connect(mapStateToProps, mapDispatchToProps)(CardListContainer);