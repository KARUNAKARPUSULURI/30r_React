import { Component } from "react";

class TypedValue extends Component{
    constructor(){
        super()
        this.state = {
            text : ""
        }
    }
    handleChange = (event) => {
        this.setState({text : event.target.value})
    }
    render(){
        return (
            <>
            <h1>Typed Value : {this.state.text}</h1>
            <input type="text" placeholder="type something..." onChange={this.handleChange}/>
            </>
        )
    }
}

export default TypedValue;