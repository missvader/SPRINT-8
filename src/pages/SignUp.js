import React from "react";
import { useState } from "react";
import { useNavigate , NavLink } from "react-router-dom";
import loginSw from "../assets/loginSw.png"
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth , db} from '../firebase/firebase';
import {  ref, set, onValue } from "firebase/database";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            set(ref(db, "users/" + userCredential.user.uid), {
              firstName: firstName,
              lastName: lastName,
              email: email,
            });
          })
          .catch((error) => console.log(error));
        navigate("/");
        //get users from database and show by console
        let data = ref(db, 'users/');
        onValue(data, (snapshot) => {
        data = snapshot.val();
        console.log(data);
        })  
  }
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  ">
      <div className ="w-full bg-zinc-800 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className ="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div>
                <img src={loginSw} alt="Disney and Star Wars logo"/>
              </div>
              <h1 className="text-xl  text-center leading-tight tracking-tight  md:text-2xl text-yellow-300 ">
                CREATE YOUR ACCOUNT
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <input 
                    type="text"
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter First name" 
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input 
                    type="text" 
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter Last name"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <input 
                    type="email" 
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter valid email" 
                    value={email}
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input 
                    type="password" 
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter a password"
                    value={password}
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" onClick={onSubmit} 
                    className="w-full text-white bg-zinc-600 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                <p className="text-sm font-light text-gray-500 ">
                    Already have an account? 
                  <NavLink to="/login/" className="font-medium text-primary-600 hover:underline">Log in
                  </NavLink>
                </p>
              </form>
          </div>
      </div>
    </div>

  );
}

export default SignUp;