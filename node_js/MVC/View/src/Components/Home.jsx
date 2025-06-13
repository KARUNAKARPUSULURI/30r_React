import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem("credentials");  
        setIsLoggedIn(false)      
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("credentials")); //{values}
        if(!data){
            navigate("/")
        }
    },[isLoggedIn])

  return (
    <div>
        <h1>Home</h1>
        <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Home