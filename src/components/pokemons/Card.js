import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="col-md-3 mb-3">
                <div className="card">
                    <h3 className="card-header">ID</h3>
                    <div className="card-body mx-auto">
                        <div className="card-title">
                            <h4>{/*name.toUpperCase().split(" ").join(" ")*/} Name</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;