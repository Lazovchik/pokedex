import React, {Component} from 'react';

class DetailedCard extends Component {

    componentDidMount() {
        let {hp, attack, defence} = ''
    }

    render() {
        return (
            <div>
                {this.props.details.name}
            </div>
        );
    }
}

export default DetailedCard;