import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthProvider";
import { ref, onValue } from "firebase/database";
import { auth , db } from "../firebase/firebase";
const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (currentUser) {
      let data = ref(db, "users/" + currentUser.uid);
      onValue(data, (snapshot) => {
        if (snapshot.exists()) {
          data = snapshot.val();
          setUsername(data.firstName + " " + data.lastName);
        }
      });
    }
  }, [currentUser]);
  
  const clickSignOut = () => {
    if (currentUser) {
      signOut(auth);
    } 
  };

 
  return (
  <div className="container-fluid bg-container">
    <div className="home-container  ">
      <div className="md:w-1/2 md:flex flex-col md:grid h-full content-center " >
        <div className="flex  flex-col  ">
        {currentUser && <p className="font-mono md:text-center text-white m-5 md:text-xl">Welcome, {username}, you´re logged in</p>}
        <p className="font-mono md:text-center text-white m-5 md:text-xl">
          Throughout the entire Star Wars universe we have been able to enjoy the appearance of different starships.
          MAY THE FORCE BE WITH YOU
        </p>
        <div className="flex justify-center">
          <Link to="/starships" className=" link">
            <button className=" btn glass m-5 ">DISCOVER</button>
          </Link>
          {currentUser && <button className="btn glass m-5"onClick={clickSignOut}>LOG OUT</button> }
        </div>
        </div>
      </div>
    </div>
  </div>  
  )
}
export default Home;