import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Card extends Component {

    state = {
        name: "",
        id: "",
        url: "",
        imgUrl: "",

        //loading error handling
        imageLoading: true,
        limitedRequests: false

    }

    componentDidMount() {

        this.setState({
            name: this.props.name,
            id: this.props.id,
            url: this.props.url,
            imgUrl: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${this.props.id}.png?raw=true`
        });

    }

    loadId = () => {
        //console.log(this.props.id);
        this.props.loadPokemonDetailedCard(this.props.id);
    }

    render() {
        return (
            <div className="col-md-3 mb-3">
                <div className="card">
                    <h3 className="card-header">{this.props.id}</h3>
                    <div className="card-body mx-auto">
                        <div className="card-title text-center">
                            <h4>{this.state.name.toUpperCase()}</h4>
                        </div>
                        <div className="card-text text-center">
                            {(this.state.imageLoading & !this.state.limitedRequests)?
                                (<h4 className="mx-auto text-center bg-warning">Image is Loading</h4>) : null
                            }
                            < img
                                className="card-img-top mx-auto poke-card-img"
                                onLoad={()=>this.setState({imageLoading: false})}
                                onError={()=>this.setState({limitedRequests: true})}
                                src={this.state.imgUrl}
                            />
                            {this.state.limitedRequests?
                                (<h4 className="mx-auto text-center bg-danger">GitHub request limit achieved</h4>) : null
                            }
                            <button
                                className="btn btn-outline-info my-2 my-sm-0 bg-info mx-auto"
                                onClick={this.loadId}
                            >
                                <Link to={'/pokemon/'+this.props.id} className="nav-link">
                                    Details
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;