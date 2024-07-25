import React, { useEffect, useState } from 'react';
import {API_KEY,imageURl} from '../../constants/constant';
import './Banner.css';
import axios from '../../axios';
function Banner() {
      const [movie, setMovie] = useState(); 
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      // console.log(response.data.results[0])
      // const results = response.data.results;
      // const randomIndex = Math.floor(Math.random() * results.length);
      setMovie(response.data.results.sort(function (a,b) { return 0.5 - Math.random() })[0])
    })
  },[])
  return (
    <div 
    style={{backgroundImage: `url(${movie ? imageURl+movie.backdrop_path:"loading . . ."})`}}className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : 'Loading...'}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
        <h1 className='discription'> {movie ? movie.overview : 'Loading . . .'}</h1>
        </div>
      <div className="fade">
        
      </div>
    </div>
  )
}

export default Banner
// https://api.themoviedb.org/3/movie/550?api_key=f11e16740287542b9d81bc681858b7b3