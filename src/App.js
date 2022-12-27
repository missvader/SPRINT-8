import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Starships from "./pages/Starships";
import Home from './pages/Home';
import './App.css';
import StarshipDetail from './components/StarshipDetail';
import Header from './components/Header';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
 
  return (
    <>
        <Header/>
        < Routes >
          < Route path = "/" element = { <Home/>}/>
          < Route path = "/starships/" element = {<Starships/> }/>
          < Route path = "/starships/:id/" element = { <StarshipDetail/>} />
          < Route path = "/login/" element = { <LogIn/> } />
          < Route path = "/signup/" element = { <SignUp/> } />
        </ Routes >
        
    </>  
  );
}

export default App;