import { useState } from "react";
import { loginApiData, postRegisterData } from "../../Services/api";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginFormData, setloginFormData] = useState({
        email : "",
        password : "",
    })
    const [data, setData] = useState([]);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setloginFormData({...loginFormData, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        loginApiData(loginFormData).then(data => setData(data))
        setloginFormData({username: "", password: "", email: "", gender: ""})
        localStorage.setItem("credentials", JSON.stringify(data))
    }

    return (
        <>
            <h1>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">Email : </label>
                <input type="email" value={loginFormData.email} placeholder="enter email" id="email" name="email" onChange={handleChange} /><br />
                <label htmlFor="password">Password : </label>
                <input type="password" value={loginFormData.password} placeholder="enter password" id="password" name="password" onChange={handleChange} /><br />
                <button type="submit">Login</button>
                <div>
                    <Link to = "/register">Doesn't have an account? Please SignUp!!</Link>
                </div>
            </form>
        </>
    )
}

export default Login;