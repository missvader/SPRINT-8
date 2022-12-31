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
        navigate("/starships")
        sessionStorage.setItem('Auth Token', userCredential._tokenResponse.refreshToken)
        localStorage.setItem([{'user': "user.email"}])
        console.log(user.email);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
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
                <div>
                <input 
                    type="email" 
                    className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter valid email" 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input 
                    type="password" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter a password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                  
                <button type="submit" onClick={onLogin}  
                  className="w-full text-white bg-zinc-600 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log in</button>
                <p className="text-sm font-light text-gray-500 ">
                    Don’t have an account yet? 
                    <NavLink to="/signup/" className="font-medium text-primary-600 hover:underline">Sign up
                    </NavLink>
                </p>
              </form>
          </div>
      </div>
    </div>

  );
}

export default LogIn;