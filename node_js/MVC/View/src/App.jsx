import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import Home from './Components/Home'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element = {<Register />}></Route>
        <Route path='/' element = {<Login />}></Route>
        <Route path='/home' element = {<Home />} />
      </Routes>
    </>
  )
}

export default App
