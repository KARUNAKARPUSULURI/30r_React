import { useState } from "react";
import { postRegisterData } from "../../Services/api";

const Register = () => {
    const [registerFormData, setRegisterFormData] = useState({
        username : "",
        password : "",
        email : "",
        gender : ""
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setRegisterFormData({...registerFormData, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const options = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(registerFormData)
        }
       
        postRegisterData(options);
        setRegisterFormData({username: "", password: "", email: "", gender: ""})
    }

    return (
        <>
            <h1>Register Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Name : </label>
                <input type="text" value={registerFormData.username} placeholder="enter name" name="username" id="username" onChange={handleChange}  /><br />
                <label htmlFor="gender">Gender : </label>
                <select value={registerFormData.gender} id="gender" name="gender" onChange={handleChange}>
                    <option value={""}>Select</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                </select>
                <label htmlFor="Email">Email : </label>
                <input type="email" value={registerFormData.email} placeholder="enter email" id="email" name="email" onChange={handleChange} /><br />
                <label htmlFor="password">Password : </label>
                <input type="password" value={registerFormData.password} placeholder="enter password" id="password" name="password" onChange={handleChange} /><br />
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;