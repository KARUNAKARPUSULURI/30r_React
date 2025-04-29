import { Component } from "react"
import Child from "./Child"
import Counter from "./Tasks/Counter"

//2 -> constructor -> when a component is being initialized this constructor gets called, render->? display jsx
class App extends Component {
  render() {
    const btnValue = "Login"
    return (
      <>
        {/* <Child btnValue = {btnValue}/> */}
        <Counter />
      </>
    )
  }
}


export default App