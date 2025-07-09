import React, { useState } from 'react'

const Register = () => {
    const [data, setData] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({...data, [name] : value})
    }
    const handleRegister = async (e) => {
        e.preventDefault();
        const payload = {
            method : "POST",
            headers: { "Content-Type": "application/json" },
            body : JSON.stringify(data)
        }
        const res = await fetch("http://localhost:3000/register", payload);
        return console.log(res);
    }

    return (
        <div>
            <h1>Register Form</h1>
            <form onSubmit={handleRegister}>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' placeholder='enter name' name='name' onChange={handleChange} />
                <label htmlFor='email'>Email: </label>
                <input type='email' id='email' placeholder='enter email' name='email' onChange={handleChange} />
                <label htmlFor='password'>Password: </label>
                <input type='password' id='password' placeholder='enter password' name='password' onChange={handleChange} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register