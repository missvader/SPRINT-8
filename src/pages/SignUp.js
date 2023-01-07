import React from "react";
import { useState } from "react";
import { useNavigate , NavLink } from "react-router-dom";
import loginSw from "../assets/loginSw.png"
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth , db} from '../firebase/firebase';
import {  ref, set, onValue } from "firebase/database";

const SignUp = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  
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
          .catch((error) => {console.log(error)
                             alert(error) });
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
                <div >
                  <input 
                    type="text"
                    className="input" 
                    placeholder="Enter First name" 
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input 
                    type="text" 
                    className="input" 
                    placeholder="Enter Last name"
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <input 
                    type="email" 
                    className="input" 
                    placeholder="Enter valid email" 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input 
                    type="password" 
                    className="input" 
                    placeholder="Enter a password"
                    required
                    minLength="6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" onClick={onSubmit} 
                    className="btn-submit ">Sign up</button>
                <p className="text-sm font-light text-gray-500 ">
                    Already have an account? 
                  <NavLink to="/login/" className="font-medium text-primary-600 hover:underline"> Log in
                  </NavLink>
                </p>
              </form>
          </div>
      </div>
    </div>

  );
}

export default SignUp;