import React, {Component} from 'react';
import {connect} from "react-redux";

class DetailedCard extends Component {

    componentDidMount() {
        let {hp, attack, defence} = ''
        let name = this.props.details.name;
        console.log(name);
    }

    render() {
        return (
            <div>
                {this.props.infos.imgUrl}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
         details: state.detail.details,
         infos: state.detail.infos
    };
}

export default connect(mapStateToProps)(DetailedCard);