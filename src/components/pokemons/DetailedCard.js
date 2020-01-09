import React, {Component} from 'react';
import {connect} from "react-redux";

class DetailedCard extends Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card mx-auto w-75">
                        <h3 className="card-header text-center">
                            Pokemon
                        </h3>
                        <div className="card-body">
                            <div className="card-text text-center">
                                <div className="row">
                                    <div className="col">
                                        <h4>
                                            {this.props.infos.name.toUpperCase()}
                                        </h4>
                                        <img
                                            className="card-img-top mx-auto mt-5"
                                            src={this.props.infos.imgUrl}
                                        />
                                    </div>
                                    <div className="col">
                                        <h4>
                                            Characteristics:
                                        </h4>
                                        <table className="table bg-soft">
                                            <tbody>
                                                <tr className="bg-soft">
                                                    <th>Name:</th>
                                                    <th>Value:</th>
                                                </tr>
                                                <tr>
                                                    <th>Pokemon Index</th>
                                                    <th>{this.props.infos.id}</th>
                                                </tr>
                                                <tr>
                                                    <th>Base Experience</th>
                                                    <th>{this.props.infos.base_exp}</th>
                                                </tr>
                                                <tr>
                                                    <th>Height</th>
                                                    <th>{this.props.infos.height} M </th>
                                                </tr>
                                                <tr>
                                                    <th>Weight</th>
                                                    <th>{this.props.infos.weight} KG</th>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <h4>
                                            Stats:
                                        </h4>
                                        <table className="table bg-soft">
                                            <tbody>
                                            <tr className="bg-soft">
                                                <th>Name:</th>
                                                <th>Value:</th>
                                            </tr>
                                            <tr>
                                                <th>HP</th>
                                                <th>{this.props.infos.hp}</th>
                                            </tr>
                                            <tr>
                                                <th>Attack</th>
                                                <th>{this.props.infos.attack}</th>
                                            </tr>
                                            <tr>
                                                <th>Defence</th>
                                                <th>{this.props.infos.defence}</th>
                                            </tr>
                                            <tr>
                                                <th>Special Attack</th>
                                                <th>{this.props.infos.sp_attack}</th>
                                            </tr>
                                            <tr>
                                                <th>Special Defence</th>
                                                <th>{this.props.infos.sp_defence}</th>
                                            </tr>
                                            <tr>
                                                <th>Speed</th>
                                                <th>{this.props.infos.speed}</th>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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