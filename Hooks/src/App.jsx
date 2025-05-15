import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Tasks/Auth/Register'
import Login from './Tasks/Auth/Login'
import Navbar from './React_Router_Dom/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Tasks/Auth/Home'
import Services from './Tasks/Auth/Services'
import SingleProduct from './Tasks/Auth/SingleProduct'
import PageNotFound from './Tasks/Auth/PageNotFound'
import UseMemo from './UseMemo/UseMemo'

function App() {
  const [count, setCount] = useState(0)

  //http://localhost:5173/
  // if you don’t specify a key at all React will use  item’s index in the array as its key 
  return (
    <>
      <UseMemo />
      {/* <Register />
      <Login /> */}
      {/* <Navbar /> */}

      {/* <Routes>
        <Route path='/' element = {<Navbar />}/>
        <Route path='/home' element = {<Home />}></Route>
        <Route path='/login' element = {<Login />} />
        <Route path='/services' element = {<Services />} />
        <Route path='/products/:id' element = {<SingleProduct />} />
        <Route path='*' element = {<PageNotFound />} />
      </Routes> */}
    </>
  )
}

export default App
