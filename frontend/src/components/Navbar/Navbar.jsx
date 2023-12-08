import './Navbar.scss';
import { Link } from 'react-router-dom';
import { useValue } from '../../context/TodoContext';
import Login from '../../pages/login/Login';
import Signup from '../../pages/signup/Signup';
const Navbar = () => {
  const { showLogin, openLogin, openSignUp, showregister } = useValue()


const handleSignUp = () =>{
  openSignUp()
}

  const handleLogin = () => {

    openLogin()

  }
  return (
    <div className='Navbar'>
      <div className="left">
        <img src="https://cdn-icons-png.flaticon.com/128/102/102279.png" alt="" />
      </div>
      <div className="center">
        <img src="https://cdn-icons-png.flaticon.com/128/4472/4472515.png" alt="" />
        <h2>TODOER</h2>
      </div>
      <div className="right">
 
          <button onClick={handleSignUp}>Signup</button>


        <button onClick={handleLogin}>Login</button>
      </div>

      {showLogin && <Login/>}
      {showregister && <Signup/>}
    </div>
  )
}

export default Navbar