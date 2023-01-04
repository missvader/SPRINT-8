import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Films = ({urlFilm}) => {
  const [filmData, setFilmData] = useState({});
  const idFilm=(urlFilm).replace(/[^0-9]+/g, "");
  const imgFilm = `https://starwars-visualguide.com/assets/img/films/${idFilm}.jpg` ;

  const getFilms = () => {
    axios
      .get(urlFilm)
      .then(res => {
        setFilmData({
          filmData,
          title:res.data.title
        })
      })
  }
  useEffect(() => {
    getFilms();
    console.log("urlFilms =>", urlFilm)
    console.log(filmData)
  }, [])
  return (
    <div className=" card mx-auto my-10 ">
      <img 
          src= {imgFilm}
          alt="film" className="w-full"/>
      
  </div>
   
  )
}

export default Films;