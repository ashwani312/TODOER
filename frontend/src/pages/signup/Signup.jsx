import { useState } from 'react';
import { useValue } from '../../context/TodoContext'
import './Signup.scss'
import axios from 'axios';

const Signup = () => {
  const { openSignUp } = useValue();

  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:5000/user/signup", formData);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="Register">
      <button className="cross" onClick={() => openSignUp()}>X</button>
      <div className="loginWrapper">
        <h1>Create New Account</h1>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Name" className="loginInput" onChange={(e) => setFromData({ ...formData, name: e.target.value })} />
            <input placeholder="Email" className="loginInput" onChange={(e) => setFromData({ ...formData, email: e.target.value })} />
            <input placeholder="Password" className="loginInput" type='password' onChange={(e) => setFromData({ ...formData, password: e.target.value })} />
            <button className="loginButton" onClick={handleSubmit}>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup