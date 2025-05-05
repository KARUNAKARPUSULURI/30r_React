import { Component } from "react";
import Counter from "./Counter";
import FetchProduct from "./FetchProduct";
import Questions from "./Questions";


class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      data: []
    }
    // console.log("Constructor")
  }

  fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = response.json()
    this.setState({ data: data })
  }


  componentDidMount() {
    // console.log("component did mount")
    // this.fetchProducts()
    fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => this.setState({ data: data }))
  }

  render() {
    // console.log("render", this.state.data)
    // console.log("fetching...",this.fetchProducts())
    return (
      <>
      <Questions />
        {/* <FetchProduct /> */}
        {/* <Counter />
        <h1>Counter : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click</button>
        {
          this.state.data.length > 0 && this.state.data.map((product, index) => {
            return <p>{product.title}</p>
          })
        } */}
      </>
    )
  }

}

export default App