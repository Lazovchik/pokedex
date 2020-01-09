import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {fetchDetails} from "../../../store/detailedcard/actions";
import {connect} from "react-redux";
import DetailedCard from "../DetailedCard";

class DetailsContainer extends Component {

    componentDidUpdate(prevProps, prevState, snapshot)
    {

        let {hp, attack, defence, sp_attack, sp_defence, speed} = '';
        if(this.props.details.stats)
        this.props.details.stats.map(el=>{
            switch (el.stat.name){
                case 'hp':
                    hp = el.base_stat;
                    break;
                case 'attack':
                    attack = el.base_stat;
                    break;
                case 'defense':
                    defence = el.base_stat;
                    break;
                case 'special-attack':
                    sp_attack = el.base_stat;
                    break;
                case 'special-defense':
                    sp_defence = el.base_stat;
                    break;
                case 'speed':
                    speed = el.base_stat;
                    break;
            }
        })

        let base_exp = this.props.details.base_experience;
        //convert to meters
        let height = (this.props.details.height*0.1).toFixed(2);
        //convert to kilograms
        let weight = this.props.details.weight * 0.1;
        let name = this.props.details.name;
        let id = this.props.details.id;
        let imgUrl="";

        if(this.props.details.sprites.front_default)
        {
            imgUrl = this.props.details.sprites.front_default;
        }

        let data = {
            name,
            id,
            base_exp,
            imgUrl,
            height,
            weight,
            hp,
            attack,
            defence,
            sp_attack,
            sp_defence,
            speed
        }

        this.props.fetchDetails(data);

    }


    render() {
        return (
            <div>
                <DetailedCard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
       // details: state.detail.details,
       // infos: state.detail.infos
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchDetails: bindActionCreators(fetchDetails, dispatch),
        //loadSpeciesDetail: bindActionCreators(loadSpeciesDetail, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);