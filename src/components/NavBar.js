import React, {Component} from "react";

class NavBar extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-md fixed-top">
                    <a className="navbar-brand col-sm-3 align-items-center">Pokedex</a>
                </nav>
            </div>
        );
    }
}

export default NavBar;