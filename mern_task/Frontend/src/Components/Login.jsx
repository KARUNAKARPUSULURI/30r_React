import React, { useState } from 'react'

const Login = () => {
    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name] : value})
    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const payload = {
            method : "POST",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify(data)
        }
        const res = await fetch("http://localhost:3000/login", payload);
        return console.log(res);
    }

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' placeholder='enter email' name='email' onChange={handleChange} />
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' placeholder='enter password' name='password' onChange={handleChange} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login