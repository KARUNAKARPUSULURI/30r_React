import { Component } from "react";

class NamesWithColors extends Component{
    constructor(){
        super()
        this.state = {
            names : ["Karunakar", "Hemanth", "Chaitanya", "Harish"],
            colors : ["red", "blue", "green", "yellow"]
        }
    }
    render() {
      return (
        <>
            {
                this.state.names.map((name, index)=>{
                    return (
                        <h1 style={{color : this.state.colors[index]}}>{name}</h1>
                    )
                })
            }
        </>
      )
    }
}

export default NamesWithColors