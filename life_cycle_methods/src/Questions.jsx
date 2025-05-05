import React, { Component } from 'react'


//Batching

//it is in asynchornous nature
export default class Questions extends Component {
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState((prevState) => ({count: prevState.count + 1}))
        this.setState((prevState) => ({count: prevState.count + 1}))
        this.setState((prevState) => ({count: prevState.count + 1}))
        this.setState((prevState) => ({count: prevState.count + 1}))
        // this.setState((prevState)=> prevState.count + 1)
        // this.setState((prevState)=> prevState.count + 1)
        // this.setState((prevState)=> prevState.count + 1)
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
