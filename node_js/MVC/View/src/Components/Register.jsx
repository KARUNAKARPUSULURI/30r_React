import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { postRegisterApi } from '../Services/api';

const Register = () => {
    const [formData, setFormData] = useState({
        username : "",
        password : "",
        email : "",
        confirmPassword : ""
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postRegisterApi(formData).then(res => console.log("20", res));
    }
  return (
    <div>
        <h1>Register Form</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Name : </label>
            <input type='text' placeholder='Enter name...' id='username' name='username' onChange={handleChange} /><br />
            <label htmlFor='email'>Email : </label>
            <input type='email' placeholder='Enter email...' id='email' name='email' onChange={handleChange} /><br />
            <label htmlFor='password'>Password : </label>
            <input type='password' placeholder='Enter password...' id='password' name='password' onChange={handleChange} /><br />
            <label htmlFor='confirmPassword'>Confirm Password : </label>
            <input type='password' placeholder='Enter confirmPassword...' id='confirmPassword' name='confirmPassword' onChange={handleChange} /><br />
            <button type='submit'>Register</button>
            <div>
                <p>Already have an account? <Link to={"/"}>SignIn!!</Link></p>
            </div>
        </form>
    </div>
  )
}

export default Register