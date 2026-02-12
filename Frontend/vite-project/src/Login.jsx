import { useNavigate } from "react-router-dom";
import "./login.css"
import { useState } from "react";
import axios from "axios";

export const Login = () => {
    const navigate = useNavigate()
    const [FormData, setformdata] = useState({
        email: "",
        password: "",
    })

    const handlechange = async (e) => {
        setformdata({ ...FormData, [e.target.name]: e.target.value, })


    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post("http://localhost:1919/api/auth/login", FormData)
            console.log("Login succsefully", response.data)
            alert("Login SuccessFully!")
            // navigate("/home")

        } catch (error) {
            console.log(error)
            alert("Login failed")

        }

    }
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="login-input"
                            value={FormData.email}
                            onChange={handlechange}
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter Your Password"
                            className="login-input"
                            value={FormData.password}
                            onChange={handlechange}
                        />
                    </div>

                    <button type="submit" className="login-btn">
                        Login
                    </button>
                </form>

                <p className="register-text">
                    Create New Account{" "}
                    <button className="register-btn" onClick={() => navigate("/Register")}>Register</button>
                </p>
            </div>
        </div>
    );
};
