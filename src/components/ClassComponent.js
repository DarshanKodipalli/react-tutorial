import React, {Component} from 'react';

class WelcomeComponent extends Component{
    render(){
    return <span>
                <h2>Welcome {this.props.name}</h2>
                <h4>{this.props.children}</h4>
            </span>;
    }
}

export default WelcomeComponent;