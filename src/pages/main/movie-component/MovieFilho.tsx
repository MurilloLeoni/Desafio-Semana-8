import { useNavigate, useParams } from "react-router-dom";
import MovieHeader from "../../../components/headers-home/MovieHeader"
import axios from "axios";
import { useEffect, useState } from "react";
import Carrossel from "../../../components/Carrossel";

interface carrossel {
  id: string;
  poster_path: string;
}

interface genre{
  id:number,
  name:string
  }

interface Movie{
  backdrop_path:string
  genres:genre[]
  original_title:string
  overview:string
  release_date:string
  runtime:number

}

const MovieFilho = () => {
    const [movieHeader,setMovieHeader] = useState<Movie>()
    const navigate = useNavigate()
    const [carrosselMov,setCarrosselMov] = useState<carrossel[]>()
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
      const similar = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${SerieID.id}/similar`,
        params: {language: 'en-US', page: '1'},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTcxNzkxOS4wMjcxNDUsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x2tOpI-s9VF6m74-llZeMGQytuVWKp5dsdHJ2ZTjBmk'
        }
      };
      
      const handleFilmes = (id: string) => {
        navigate(`/home/movie/${id}`);
      };
      
      
      
      
      useEffect(()=>{
        axios
        .request(options)
        .then(function (response) {
            console.log(response.data)
            setMovieHeader(response.data)
            
            // console.log(carrosselMov)
           
        })
        .catch(function (error) {
          console.error(error);
        });

        axios
        .request(similar)
        .then(function (response) {
          console.log(response.data.results);
          setCarrosselMov(response.data.results)
        })
        .catch(function (error) {
          console.error(error);
        });
        
      },[navigate])


  return (
    <div>
      <MovieHeader data={movieHeader} movieCategorie={true}/>
      <div className="bg-neutral-600 pb-11">
        <div className="pl-20 pb-11">
        
        <h3 className="h4-heading text-white pb-4">Similares</h3>
        <Carrossel data={carrosselMov} redirectCollection={handleFilmes}/>
        </div>

      </div>
    </div>
  )
}

export default MovieFilho
