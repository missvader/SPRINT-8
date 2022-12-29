import React from "react";
import { useState , useEffect} from "react";
import loginSw from "../assets/loginSw.png"
import { Link } from "react-router-dom";


const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("")


  const formValidation = () => {
    let newErrors = {}
    if (firstName === "") {
      newErrors.firstName = <span className="text-red-800 text-center">
        Name Can't Be Blanck</span>
    }
    if (lastName === "") {
      newErrors.lastName = <span className="text-red-800 text-center">
        Name Can't Be Blanck</span>
    }
    if (email === "") {
      newErrors.email = <span className="text-red-800 text-center">
         Email Address Is Required</span>
    } else if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/) {
      newErrors.email = <span className="text-red-800 text-center">
        Email address is invalid</span>
    } else {
      newErrors.email = <span className="text-green-800 text-center ">
        Email is Valid</span>
    }
    if (password === "") {
      newErrors.password = <span className="text-red-800 text-center">
        Password Is Required</span>
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/) {
      newErrors.password = <span className="text-red-800 text-center">
        Invalid Password Format</span>
    } else {
      newErrors.password = <span className="text-green-800 text-center ">
        Correct Password</span>
    }
    setErrors(newErrors)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    formValidation()
    setUsers([...users, { email: email, password: password , firstName:firstName, lastName:lastName}])
  }

  const [users, setUsers] = useState(() => {
    const data = localStorage.getItem("data")
    return data ? JSON.parse(data) : []
  })
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(users))
    console.log(users)
  }, [users])

  

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
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input 
                    type="text"
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter First name" 
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  {errors.firstName}
                  <input 
                    type="text" 
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter Last name"
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName}
                  <input 
                    type="email" 
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter valid email" 
                    value={email}
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email}
                  <input 
                    type="password" 
                    className="bg-gray-50 mb-3 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:bg-zinc-600 focus:border-4 focus:border-yellow-300 block w-full p-2.5 " 
                    placeholder="Enter a password"
                    value={password}
                    id="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password}
                </div>
                <button type="submit" action="submit" 
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