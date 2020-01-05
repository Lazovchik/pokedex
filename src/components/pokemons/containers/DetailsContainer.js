import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadPokemonDetail, loadSpeciesDetail} from "../../../store/detailedcard/actions";
import {connect} from "react-redux";

class DetailsContainer extends Component {
    render() {
        return (
            <div>

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
        //addInfosToState
        loadSpeciesDetail: bindActionCreators(loadSpeciesDetail, dispatch)
    };
}

/*const mapDispatchToProps = {
    loadPokemonList
}*/

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);