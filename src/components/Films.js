import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const Films = ({urlFilm}) => {
  const [filmData, setFilmData] = useState({});
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

    <div className="ml-3" >
            <p>{filmData.title}</p>
           
    </div>
  )
}

export default Films;