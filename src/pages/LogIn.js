import React from "react"
import loginSw from "../assets/loginSw.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import Input from "../components/formInput"
import { loginFields } from "../constants/formFields"

const fields=loginFields;
let fieldsState = {};
fields.forEach(field=>fieldsState[field.id]='');

const LogIn = () => {

  const [loginState,setLoginState]=useState(fieldsState);

  const handleChange=(e)=>{
        setLoginState({...loginState,[e.target.id]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    
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
              <form className="space-y-4 md:space-y-6" action="#">
              {
                fields.map(field=>
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
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
                    className="w-full text-white bg-zinc-600 hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Log in</button>
                  <p className="text-sm font-light text-gray-500 ">
                      Don’t have an account yet? 
                      <Link to="/signup/" className="font-medium text-primary-600 hover:underline">Sign up
                      </Link>
                  </p>
              </form>
          </div>
      </div>
    </div>

  );
}

export default LogIn;