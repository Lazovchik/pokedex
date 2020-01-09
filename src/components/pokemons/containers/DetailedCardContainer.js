import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {loadPokemonDetail} from "../../../store/detailedcard/actions";
import {connect} from "react-redux";
import DetailsContainer from "./DetailsContainer";

class DetailedCardContainer extends Component {

    componentDidMount() {
        this.props.loadPokemonDetail("https://pokeapi.co/api/v2/pokemon/"+this.props.displayablePokemonId+"/");
    }

    render() {
        console.log(this.props.details);
        console.log(this.props.displayablePokemonId);
        return (
            <div className="row">
                <div className="col">
                    <DetailsContainer
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
        displayablePokemonId: state.idLoad.displayablePokemonId
        //species: state.detail.species
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemonDetail: bindActionCreators(loadPokemonDetail, dispatch),
        //loadSpeciesDetail: bindActionCreators(loadSpeciesDetail, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedCardContainer);

