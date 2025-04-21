import "./App.css"
import img from "./assets/image.png"
import img1 from "./assets/img.png"

function App() {
  const name = "chaitanya" //Y
  const num = 123 //Y
  const boolean = false //X
  const undef = undefined //X
  const nul = null //X
  function funcName() {
    return "Function"
  }
  const obj = {
    name: "asd",
    age: 213
  }
  const products = [
    {name : "product 1"},{ name : "product 2" },{name : "prodcut 3"}
  ]
  // const arr = [undefined, { name: "karunakar" }, "asd", 123, null, true, [1, "asd", null]] //asd123
  return (
    <>
      <div>
        {/* <h1>Hello</h1> */}
        {/* <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores tenetur explicabo possimus a, consequuntur similique odio sunt eum impedit distinctio perspiciatis pariatur molestiae minus molestias iste veritatis aspernatur dicta corporis.</pre> */}
        <p>{name}</p>
        <img src="https://picsum.photos/200/300" alt = "asdasd"/>
        <img src={img} alt="sdfghjk"/>
        <img src={img1} alt="sdfghjk"/>
        <p>asfasf</p>
      </div>
      <div>
        {products[0].name}
        {products.map((ele, index)=>{
          return <p>{ele.name}</p>
        })}
      </div>
    </>
  )
}

export default App