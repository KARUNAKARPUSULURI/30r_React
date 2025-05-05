import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  // if you don’t specify a key at all React will use  item’s index in the array as its key 
  return (
    <>
      {
        [1, 2, 3, 4, 5, 6].map((num, index) => {
          return <p>{num}</p>
        })
      }
    </>
  )
}

export default App
