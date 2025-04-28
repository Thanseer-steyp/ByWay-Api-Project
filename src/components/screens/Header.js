import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import "../../App.css"
import Logo from "../assets/icons/logo.svg"
import Cart from "../assets/icons/cart.svg"
import { UserContext } from '../../App'

function Header() {
  const {userData, updateUserData} = useContext(UserContext);
  const handleLogout = () => {
    updateUserData({ type: "LOGOUT" });
  };

  const handleLogoutAndNavigate = () => {
    handleLogout();
    navigate('/');
  };
  const navigate = useNavigate();
  return (
    <>
      <header>
            <section class="wrapper">
                <section class="header">
                <h1>
                    <a href="https://www.steyp.com">
                      <img src={Logo} alt='Logo'/>
                      <small>Byway</small>
                    </a>
                    
                </h1>
                <ul>
                    <li><a href="https://www.steyp.com"><img src={Cart} alt='Cart'/></a></li>
                    { userData ? (
                     <li className='logout' onClick={() => handleLogoutAndNavigate()}>Logout</li> 
                    ) : (<li className='login' onClick={() => navigate('/auth/login')}>Login</li>)
                  }
                    
                    {/* <li><a href="https://www.steyp.com" class="signup">Sign Up</a></li> */}
                </ul>
                </section>
            </section>
        </header>

    </>
  )
}

export default Header
