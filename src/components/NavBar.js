import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md fixed-top justify-content-between">
                    <a className="navbar-brand">Pokedex</a>
                    <form className="form-inline">
                        <button className="btn btn-outline-info my-2 my-sm-0 bg-info">
                            <Link to={'/'} className="nav-link">
                                Load Pokemons
                            </Link>
                        </button>
                    </form>
                </nav>
            </div>
        );
    }
}

export default NavBar;