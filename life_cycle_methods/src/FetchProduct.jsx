import React, { Component } from 'react'

export default class FetchProduct extends Component {
    constructor() {
        super()
        this.state = {
            count: 1,
            product: null //{}
        }
    }
    componentDidMount() {
        fetch(`https://fakestoreapi.com/products/${this.state.count}`)
            .then(res => res.json())
            .then(data => this.setState({ product: data }))
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            fetch(`https://fakestoreapi.com/products/${this.state.count}`)
                .then(res => res.json())
                .then(data => this.setState({ product: data }))
        }
    }
    
    //1 - 1 -> X -> 2
    //1 - 2 ->if(1 !== 2){api}   2-2 -> if(2 !== 2) {}
    render() {
        return (
            <div>
                <div>
                    <h3>Title : {this.state.product && this.state.product.title}</h3>
                </div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
            </div>
        )
    }
}
