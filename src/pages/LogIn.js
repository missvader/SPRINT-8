import React from "react"
import loginSw from "../assets/loginSw.png"
import { useState } from "react"
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { NavLink, useNavigate } from 'react-router-dom'




const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/")
        sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
        console.log(user.email);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        alert(errorCode, errorMessage)
    });
   
}

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  ">
      <div className ="w-full bg-zinc-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className ="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <img src={loginSw} alt="Disney and Star Wars logo"/>
              </div>
              <h1 className="text-xl  text-center leading-tight tracking-tight  md:text-2xl text-yellow-300 ">
                  ENTER YOUR EMAIL ADDRESS
              </h1>
              <form className="space-y-4 md:space-y-6"  >
                <div >
                <input 
                    type="email" 
                    className=" form-control input" 
                    placeholder="Enter valid email" 
                    autoComplete="on"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input 
                    type="password" 
                    className="form-control input " 
                    placeholder="Enter a password"
                    minLength="6"
                    required
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                  
                <button type="submit" onClick={onLogin}  
                  className="btn-submit focus:ring-primary-300">Log in</button>
                <p className="text-sm font-light text-gray-500 ">
                    Don’t have an account yet? 
                    <NavLink to="/signup/" className="font-medium text-primary-600 hover:underline"> Sign up
                    </NavLink>
                </p>
              </form>
          </div>
      </div>
    </div>

  );
}

export default LogIn;