import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Tasks/Auth/Register'
import Login from './Tasks/Auth/Login'
import Navbar from './React_Router_Dom/Navbar'

function App() {
  const [count, setCount] = useState(0)


  // if you don’t specify a key at all React will use  item’s index in the array as its key 
  return (
    <>
      {/* <Register />
      <Login /> */}
      <Navbar />
    </>
  )
}

export default App
