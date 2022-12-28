import React from "react";
import { useState } from "react";
import Input from "../components/FormInput"
import { signupFields } from "../constants/formFields";
import loginSw from "../assets/loginSw.png"
import { Link } from "react-router-dom";


const fields=signupFields;
let fieldsState={};

fields.forEach(field => fieldsState[field.id]='');

const SignUp = () => {
  const [signupState,setSignupState]=useState(fieldsState);

  const handleChange=(e)=>setSignupState({...signupState,[e.target.id]:e.target.value});

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(signupState)
    createAccount()
  }
  //handle Signup API Integration here
  const createAccount=()=>{

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
              <form className="space-y-4 md:space-y-6" action="#">
              {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                    />
                
                )
            }
                  
                  <button type="button" action="submit" onSubmit={handleSubmit}
                    className="w-full text-white bg-zinc-600 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>
                  <p className="text-sm font-light text-gray-500 ">
                    Already have an account? 
                      <Link to="/login/" className="font-medium text-primary-600 hover:underline">Log in
                      </Link>
                  </p>
              </form>
          </div>
      </div>
    </div>

  );
}

export default SignUp;