import React, {Component} from 'react';
import {connect} from "react-redux";

class DetailedCard extends Component {

    /*componentDidMount() {

    }*/

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="card mx-auto">
                        <h3 className="card-header text-center">
                            Pokemon
                        </h3>
                        <div className="card-body">
                            <div className="card-title text-center mx-auto">

                            </div>
                            <div className="card-text text-center">
                                <div className="row">
                                    <div className="col bg-warning">
                                        <h4>
                                            {this.props.infos.name.toUpperCase()}
                                        </h4>
                                        <br/>
                                        <img
                                            className="card-img-top mx-auto"
                                            src={this.props.infos.imgUrl}
                                        />
                                    </div>
                                    <div className="col bg-danger">
                                        <h4>
                                            Characteristics:
                                        </h4>

                                        <table className="table">
                                            <tbody>
                                            <tr>
                                                <th><h5>Name:</h5></th>
                                                <th><h5>Value:</h5></th>
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
                                                <th>{this.props.infos.height*0.1} M </th>
                                            </tr>
                                            <tr>
                                                <th>Weight</th>
                                                <th>{this.props.infos.weight} KG</th>
                                            </tr>
                                            <tr>
                                                <th>Pokemon Index</th>
                                                <th>{this.props.infos.id}</th>
                                            </tr>
                                            <tr>
                                                <th>Pokemon Index</th>
                                                <th>{this.props.infos.id}</th>
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