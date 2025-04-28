import React, { useState, useContext } from 'react'
import { Helmet } from "react-helmet";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';


function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const {updateUserData} = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setMessage("");
        e.preventDefault();

        axios
            .post("https://fakestoreapi.com/auth/login", {username , password})
            .then((response) => {
                let data = response.data;
                localStorage.setItem("user_data", JSON.stringify(data)); 
                updateUserData({ type: "LOGIN", payload: data });
                console.log(localStorage.getItem("user_data"));

                navigate("/");
            })
            .catch(error => {
                console.log(error.response.status, error.response.data);
                if(error.response.status == 401) {
                    setMessage(error.response.data);
                }
            })
    };

  return (
    <>
    <Helmet>
        <title>Byway | Login</title>
    </Helmet>
      <section id="loginPage">
        <section className="wrapper">
            <h2>Login</h2>
            <form action="" id='loginForm' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Enter your username' 
                    id='username' 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder='Enter your password' 
                    id='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <input type="submit" id='submit-btn'/>
                {message && <p>{message}</p>}
            </form>
        </section>
      </section>
    </>
  )
}

export default LoginPage
