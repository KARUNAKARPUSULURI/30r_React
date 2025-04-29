import { Component } from "react";

class Counter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    //["karunakar"]
    //["red"]
    handleIncrement = () => {
        if(this.state.count < 20){
            this.setState({count : this.state.count + 1})
        }
    }
    handleDecrement = () => {
        if(this.state.count > 0){
            this.setState({count : this.state.count - 1})
        }
    }
    handleReset = () => {
        this.setState({count : 0})
    }
    render() {
        return (
            <>
                <div>
                    <h3>Counter : {this.state.count}</h3>
                    <div>
                        <button disabled = {this.state.count >= 20} onClick={this.handleIncrement}>+</button>
                        <button disabled = {this.state.count == 0} onClick={this.handleReset}>⟲</button>
                        <button disabled = {this.state.count <= 0} onClick={this.handleDecrement}>-</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Counter