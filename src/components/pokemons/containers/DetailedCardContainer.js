import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadPokemonDetail, loadSpeciesDetail } from "../../../store/detailedcard/actions";
import {connect} from "react-redux";
import DetailedCard from "../DetailedCard";

class DetailedCardContainer extends Component {

    componentDidMount() {
        this.props.loadPokemonDetail("https://pokeapi.co/api/v2/pokemon/1/");
    }

    render() {
        console.log(this.props.details);
        return (
            <div className="row">
                <div className="col">
                    <DetailedCard
                        details={this.props.details}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        details: state.detail.details,
        species: state.detail.species
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemonDetail: bindActionCreators(loadPokemonDetail, dispatch),
        loadSpeciesDetail: bindActionCreators(loadSpeciesDetail, dispatch)
    };
}

/*const mapDispatchToProps = {
    loadPokemonList
}*/

export default connect(mapStateToProps, mapDispatchToProps)(DetailedCardContainer);

