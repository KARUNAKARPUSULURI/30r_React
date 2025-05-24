import React, { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import Register from './Tasks/Auth/Register'
import Login from './Tasks/Auth/Login'
import Navbar from './React_Router_Dom/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Tasks/Auth/Home'
import Services from './Tasks/Auth/Services'
import SingleProduct from './Tasks/Auth/SingleProduct'
import PageNotFound from './Tasks/Auth/PageNotFound'
import UseMemo from './UseMemo/UseMemo'
import Spinner from './Lazy/Spinner'
import UseContext from './UseContext/UseContext'
import UseRef from './UseRef/UseRef'
import UseReducer from './UseReducer/UseReducer'
import Antd from './CSS_Libraries/Antd'
import ImagePreview from './Previews/ImagePreview'
import Gallery from './Previews/gallery'
import Audio from './Uploads/Audio'
import TodoList from './TodoList/TodoList'
import LayOut from './TodoList/Layout'
// import UseCallback from './UseCallback/UseCallback'
const UseCallback = lazy(() => import("./UseCallback/UseCallback"))
const Register = lazy(() => import("./Tasks/Auth/Register"))

function App() {
  const [count, setCount] = useState(0)

  //http://localhost:5173/
  // if you don’t specify a key at all React will use  item’s index in the array as its key 
  return (
    <>
      <LayOut />
      {/* <TodoList /> */}
      {/* <Audio /> */}
      {/* <Gallery /> */}
      {/* <ImagePreview /> */}
      {/* <Antd /> */}
      {/* <UseReducer /> */}
      {/* <UseRef /> */}
      {/* <UseContext /> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <UseCallback />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Register />
      </Suspense> */}
      {/* <UseCallback /> */}
      {/* <UseMemo /> */}
      {/* <Register />
      <Login /> 
      <Navbar /> */}

      {/* <Routes>
        <Route path='/' element = {<Navbar />}/>
        <Route path='/home' element = {<Home />}></Route>
        <Route path='/login' element = {<Login />} />
        <Route path='/register' element = {<Register />}/>
        <Route path='/services' element = {<Services />} />
        <Route path='/products/:id' element = {<SingleProduct />} />
        <Route path='*' element = {<PageNotFound />} />
      </Routes> */}
    </>
  )
}

export default App
