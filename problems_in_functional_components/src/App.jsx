import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [data, setData] = useState([])
  async function fetchUsers() {
    const response = await fetch("http://localhost:3000/users")
    const data = response.json()
    return data
  }
  useEffect(() => {
    fetchUsers().then((data)=>setData(data))
  }, [])
  console.log(data)
  return (
    <div>
      <h1>Data</h1>
      { }
    </div>
  )
}

export default App