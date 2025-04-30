import { Component } from "react"
import Child from "./Child"
import Counter from "./Tasks/Counter"
import TypedValue from "./Tasks/TypedValue"
import ShowTypedColor from "./Tasks/ShowTypedColor"
import NamesWithColors from "./Tasks/NamesWithColors"
import CreateAndReadInput from "./Tasks/CreateAndReadInput"

//2 -> constructor -> when a component is being initialized this constructor gets called, render->? display jsx
class App extends Component {
  render() {
    const btnValue = "Login"
    return (
      <>
        {/* <Child btnValue = {btnValue}/> */}
        {/* <Counter /> */}
        {/* <TypedValue /> */}
        {/* <ShowTypedColor /> */}
        {/* <NamesWithColors /> */}
        <CreateAndReadInput />
      </>
    )
  }
}


export default App