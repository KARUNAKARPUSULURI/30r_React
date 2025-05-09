import React from 'react'

const Home = () => {
    const data = localStorage.getItem("credentials")
    console.log(data)
  return (
    <div>Home</div>
  )
}

export default Home