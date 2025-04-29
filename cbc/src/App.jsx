import { Component } from "react";
import Props from "./Props";
import Table from "./Table";
import Card from "./Card";
import MoveBox from "./ref";
class App extends Component {
  name = "karuakar"
  data = [{
    id: 1,
    name: "john",
    age: 30
  }, {
    id: 2,
    name: "joe",
    age: 30
  }]
  render() {
    name = "karunakar"
    return <>
      <MoveBox />
      <Card />
      <Props name={name} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <Table data={this.data} />
        </tbody>
      </table>
      <h1>This is class based component: {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet asperiores quam inventore quaerat quia, voluptatum reprehenderit, delectus doloribus mollitia adipisci, voluptates sequi animi quo ipsum perferendis. Cum iste dolor cumque?
        Porro, inventore? Quam quasi, non autem aliquid laudantium porro maiores dolorum fugiat aspernatur omnis consequatur repellendus placeat, odit voluptates quae suscipit, enim ab architecto? Sint ut iure eaque illo eligendi.
        Doloribus rem tempora libero praesentium accusamus est doloremque et aliquam, molestias, facere unde, voluptatem in quaerat! Voluptas odit itaque praesentium excepturi, laborum ducimus ratione harum cumque ab omnis quasi ad?</p>
    </>
  }
  // name = "string"
  // hello = () => 123
  // render = () => <>
  //   <h1>Hello: {this.name} - {this.hello()}</h1>
  //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ab numquam voluptatibus libero accusantium perferendis voluptatum sint dolores, minus hic repellat? Tempora recusandae distinctio reprehenderit odit. Sint nostrum voluptate aspernatur.
  //     Iure ullam nam, facilis voluptate veniam cupiditate eius aspernatur rem sunt inventore soluta? Deserunt, ab! Impedit tempora, sequi eos itaque quia natus provident ad consectetur suscipit consequatur voluptate omnis possimus.
  //     Corporis commodi ut perferendis obcaecati, quidem amet odit ipsa quia quis laborum eligendi labore illum eveniet. Praesentium sint autem, pariatur aspernatur dolorum fugiat, aut nostrum officia suscipit maxime inventore tenetur.</p>
  // </>
}

export default App