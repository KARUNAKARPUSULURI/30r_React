import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'))

function Counter() {
  const [count, setCount] = useState(0) //it returns a stateful value and a function to update it
  const [age, setAge] = useState(0) //it returns a stateful value and a function to update it
  const [name, setName] = useState(0) //it returns a stateful value and a function to update it
  const [email, setEmail] = useState(0) //it returns a stateful value and a function to update it

  const handleClick = () => {
    setCount(count) //new value
  }
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={handleClick}>Click</button>
    </>
  )
}

root.render(<Counter />)
