import { useParams } from "react-router-dom";
import MovieHeader from "../../../components/headers-home/MovieHeader"
import axios from "axios";
import { useState } from "react";


const MovieFilho = () => {
    const [movieHeader,setMovieHeader] = useState()
    const SerieID = useParams();
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${SerieID.id}`,
        params: {language: 'en-US'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTcxNzkxOS4wMjcxNDUsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x2tOpI-s9VF6m74-llZeMGQytuVWKp5dsdHJ2ZTjBmk'
        }


      };
      
      axios
        .request(options)
        .then(function (response) {
            // console.log(response.data.release_date)
            setMovieHeader(response.data)
        })
        .catch(function (error) {
          console.error(error);
        });

  return (
    <div>
      <MovieHeader data={movieHeader} movieCategorie={true}/>
    </div>
  )
}

export default MovieFilho
