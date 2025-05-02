import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        this.setState({count : this.state.count + 1})
    }
    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
            </div>
        )
    }
}
