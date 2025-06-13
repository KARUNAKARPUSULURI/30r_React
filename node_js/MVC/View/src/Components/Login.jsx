import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { postLoginApi } from '../Services/api';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postLoginApi(formData).then(res => {
            
            if(res){
                localStorage.setItem("credentials", JSON.stringify(res));
                navigate("/home");
            }
        })
    }
    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Name : </label>
                <input type='text' placeholder='Enter name...' id='username' name='username' onChange={handleChange} /><br />
                <label htmlFor='password'>Password : </label>
                <input type='password' placeholder='Enter password...' id='password' name='password' onChange={handleChange} /><br />
                <button type='submit'>Login</button>
                <div>
                    <p>Don't have an account? <Link to={"/register"}>SignUp!!</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login