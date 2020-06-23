import React, { Component } from 'react'

class StateDemo extends Component{

    constructor(){
        super();
        this.state = {
            initialMessage: "Welcome World"
        }
    }

    clickListener(){
        this.setState({
            initialMessage: "Have a great day!"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.initialMessage}</h1>
                <button onClick={()=>{this.clickListener()}}>Change</button>
            </div>
        );
    }
}

export default StateDemo;