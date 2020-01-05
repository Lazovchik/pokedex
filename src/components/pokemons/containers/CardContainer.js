import React, {Component} from 'react';
//import {connect} from "react-redux";
//import {bindActionCreators} from "redux";

import Card from "../Card";
//import {loadPokemonCard} from "../../../store/card/actions";



class CardContainer extends Component {

    render() {
        return (
            <Card
                name={this.props.name}
                url={this.props.url}
                id={this.props.url.split('/')[this.props.url.split('/').length-2]}
            />
        );
    }
}
/*
const mapStateToProps = state => {
    return {
        name: state.card.pokemon.find(obj => obj.id == this.props.ky),
        //id: state.card.id,
        //url: state.card.url,
        //imgUrl: state.card.imgUrl
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemonCard: bindActionCreators(loadPokemonCard, dispatch)
    };
}

export default connect(mapStateToProps,{loadPokemonCard})(CardContainer);
*/
export default CardContainer;