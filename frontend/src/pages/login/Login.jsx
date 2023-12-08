import { useState } from "react";
import { useValue } from "../../context/TodoContext";
import "./Login.scss";
import axios from "axios";


export default function Login() {
    const { openLogin } = useValue();
    const [formData, setFromData] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/user/login", formData);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="Login">
            <button className="cross" onClick={() => openLogin()}>X</button>
            <div className="loginWrapper">
                <h1>Login</h1>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" onChange={(e) => setFromData({ ...formData, email: e.target.value })} />
                        <input placeholder="Password" className="loginInput" onChange={(e) => setFromData({ ...formData, password: e.target.value })} />
                        <button className="loginButton" onClick={handleSubmit}>Log In</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
