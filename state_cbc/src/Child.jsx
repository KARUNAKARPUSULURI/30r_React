import { Component } from "react"

class Child extends Component {
    constructor() {
        super()
        this.state = {
            // btnValue: "Login",
            btnValue: true,
            age : 1
        }
    }
    handleClick = () => {
        // this.setState({btnValue : this.state.btnValue == "Login" ? "Logout" : "Login", age : this.state.age + 1})
        this.setState({btnValue : !this.state.btnValue, age : this.state.age + 1})
    }
    render() {

        //1st render -> btnValue -> Login ->Login ==Login -> Logout
        //2nd render -> btnValue -> Logout -> Logout == Login -> Login
        //3rd render ->btnValue -> Login -> Login == Login -> Logout
        console.log(this.state.btnValue)
        return (
            // <button onClick={this.handleClick}>{this.state.btnValue }-{this.state.age}</button>
            <button onClick={this.handleClick}>{this.state.btnValue ? "Login" : "Logout"}-{this.state.age}</button>
        )
    }
}
export default Child