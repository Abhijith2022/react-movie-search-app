import React, { useEffect, useState } from "react";
// import Youtube from "react-youtube";
// import images from '../images'
import "./RowPost.css";
import { imageURl ,API_KEY} from "../../constants/constant";
import axios from "../../axios";
function RowPost(props) {
  const [movies, setMovie] = useState([]);
  const [urlId,setId] = useState ('')
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        // console.log(response.data)
        setMovie(response.data.results);
        // 
      })
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie = (id)=>{
console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
).then(response=>{
  // console.log(response.data)
  if(response.data.results.length!==0){
    setId(response.data.results[0])
  }else{
    console.log("eeeee")
  }
  
}
)
  }
  return (
    <div className="row">
      <h2>{props.titles}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
          onClick={()=>handleMovie(obj.id)}
            alt="poster"
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageURl + obj.poster_path}`}
          />
        ))}

      </div>
      
     {/* {setId &&  <Youtube opts={opts} videoId={setId.key} /> } */}

    </div>
  )
}

export default RowPost;
