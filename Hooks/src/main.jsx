import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import UseEffect from './UseEffect/UseEffect.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
const root = createRoot(document.getElementById('root'))
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

function Counter() {
  const [count, setCount] = useState(0) //it returns a stateful value and a function to update it
  const [age, setAge] = useState(0) //it returns a stateful value and a function to update it
  const [name, setName] = useState("karunakar") //it returns a stateful value and a function to update it
  const [email, setEmail] = useState(0) //it returns a stateful value and a function to update it

  // Queue = ["chaitanya", "Hemanth"]
  // QueueC = [1, 3, 2]
  const handleClick = () => {
    console.log("name", name)
    setName("chaitanya")
    setCount((prev) => prev + 1) //re-render
  }

  return (
    <>
      <h1>Counter : {count} - {name}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
