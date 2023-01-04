import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Starships from "./pages/Starships";
import Home from './pages/Home';
import './App.css';
import StarshipDetail from './components/StarshipDetail';
import Header from './components/Header';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import { ShipsContextProvider } from './context/ShipsContext';
import { AuthProvider } from './context/AuthProvider';
import PrivateRoute from './Routes.js/PrivateRoute';

function App() {
  return (
   <AuthProvider> 
    <ShipsContextProvider>   
        <Header/>
        < Routes >
          < Route path = "/" element = { <Home/>}/>
          < Route path = "/starships/" element = {
            <PrivateRoute>
              <Starships/>
            </PrivateRoute>
             }/>
          < Route path = "/starships/:id/" element = { <StarshipDetail/>} />
          {/*< Route path='/pilots/:id/' element = {<PilotDetail/>} />
          < Route path='/films/:id' element = {<FilmsDetail/>}/>*/}
          < Route path = "/login/" element = { <LogIn/> } />
          < Route path = "/signup/" element = { <SignUp/> } />
        </ Routes >
      </ShipsContextProvider> 
    </AuthProvider>   
      
  );
}

export default App;