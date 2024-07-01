import axios from "axios";
import Carrossel from "../../../components/Carrossel";
import MovieHeader from "../../../components/headers-home/MovieHeader";
import useApi from "../../../shared/API/Hooks/useApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface carrossel {
  id: string;
  poster_path: string;
}
const Movie = () => {
  const [carrossel, setCarrossel] = useState<carrossel[]>();
  const navigate = useNavigate()
  const movieHeader = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/573435`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTcxNzkxOS4wMjcxNDUsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x2tOpI-s9VF6m74-llZeMGQytuVWKp5dsdHJ2ZTjBmk",
    },
  };
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTcxNzkxOS4wMjcxNDUsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x2tOpI-s9VF6m74-llZeMGQytuVWKp5dsdHJ2ZTjBmk",
    },
  };

 useEffect(()=>{
  axios
  .request(options)
  .then(function (response) {
    // console.log(response.data);
    setCarrossel(response.data.results)
  })
  .catch(function (error) {
    console.error(error);
  });
 },[])

 const handleFilmes = (id: string) => {
  navigate(`/home/movie/${id}`);
};


  const dataHeader = useApi(movieHeader);
  return (
    <div>
      <MovieHeader data={dataHeader.dados} movieCategorie={false} />
      <div className="bg-neutral-600 pb-11">
        <div className="ml-16 pt-2">
          <div className="flex flex-col gap-2">
            <h4 className="h4-heading text-white">Lançamentos</h4>
            <div>
              <Carrossel data={carrossel} redirectCollection={handleFilmes}/>{" "}
            </div>
            <h4 className="h4-heading text-white">Populares</h4>
            <div>
              <Carrossel data={carrossel} redirectCollection={handleFilmes}/>{" "}
            </div>
            <h4 className="h4-heading text-white">Mais bem avaliados</h4>
            <div>
              <Carrossel data={carrossel} redirectCollection={handleFilmes}/>{" "}
            </div>
            <h4 className="h4-heading text-white">Em breve</h4>
            <div>
              <Carrossel data={carrossel} redirectCollection={handleFilmes}/>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
