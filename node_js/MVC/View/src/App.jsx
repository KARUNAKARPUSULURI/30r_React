import { Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element = {<Register />}></Route>
        <Route path='/' element = {<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
