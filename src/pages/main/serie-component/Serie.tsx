import axios from "axios";
import HomeHeader from "../../../components/headers-home/HomeHeader";
import { apiRequest } from "../../../shared/API/Config/Config";
import useApi from "../../../shared/API/Hooks/useApi";
import serie from "../../../shared/API/Model/Serie";
import { useEffect, useState } from "react";
import Carrossel from "../../../components/Carrossel";
import { useNavigate } from "react-router-dom";

interface carrossel {
  id: string;
  poster_path: string;
}
const Serie = () => {
  const navigate = useNavigate()
const [carrossel,setCarrossel] = useState<carrossel[]|undefined>()
  


const serieHeader = apiRequest(
    "GET",
    "https://api.themoviedb.org/3/tv/94954"
  );

  const  dadosSerie = useApi<serie>(serieHeader);

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/tv/popular',
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTcxNzkxOS4wMjcxNDUsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x2tOpI-s9VF6m74-llZeMGQytuVWKp5dsdHJ2ZTjBmk'
    }
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

 const handleSeries = (id: string) => {
  navigate(`/home/serie/${id}`);
};

  return (
    <div>
      <HomeHeader serie={dadosSerie.dados} />
      <div className=" bg-neutral-600 pb-11">
        <div className="ml-16 pt-2">
          <div className="flex flex-col gap-2">
            <h4 className="h4-heading text-white">Lançamentos</h4>
            <div><Carrossel data={carrossel} redirectCollection={handleSeries}/></div>
            <h4 className="h4-heading text-white">Populares</h4>
            <div><Carrossel data={carrossel} redirectCollection={handleSeries}/></div>
            <h4 className="h4-heading text-white">Estão no ar</h4>
            <div><Carrossel data={carrossel} redirectCollection={handleSeries}/></div>
            <h4 className="h4-heading text-white">Mais bem avaliadas</h4>
            <div><Carrossel data={carrossel} redirectCollection={handleSeries}/></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serie;
