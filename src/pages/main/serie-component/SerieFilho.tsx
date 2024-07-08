import { useEffect, useState } from "react"
import Carrossel from "../../../components/Carrossel"
import { apiImageUrl, apiOptions } from "../../../shared/API/Config/Config"
import axios from "axios"
import serie from "../../../shared/API/Model/Serie"
import { useNavigate, useParams } from "react-router-dom"
import semImg from "../../../assets/img/sem-img.jpg"
import HomeHeader from "../../../components/headers-home/HomeHeader"

interface carrossel {
  id: string;
  poster_path: string;
}

const SerieFilho = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState<serie>()
  const [carrossel,setCarrossel] = useState<carrossel[]>()
  const options = apiOptions("GET",`https://api.themoviedb.org/3/tv/${params.id}`)

  const similar = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${params.id}/similar`,
    params: {language: 'en-US', page: '1'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTg1NDQ0Mi42NDEzNiwic3ViIjoiNjY3OWY2OWJiNTFjODgzNTk1M2I0MDE2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xx9HsfPCJQKF1HRn1i8vyAJM6eSqaNUYRw8Ak1sVyPE'
    }
  };
  
  
  useEffect(()=>{
    axios
    .request(options)
    .then(function (response) {
      // console.log(response.data)
      setData(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });

    axios
    .request(similar)
    .then(function (response) {
      // console.log(response.data.results);
      setCarrossel(response.data.results)
    })
    .catch(function (error) {
      console.error(error);
    });
  },[navigate])

  const handleRedirect = (season_number:number) =>{
    navigate(`/home/serie/${params.id}/${season_number}`)
  }

  const handleRedirectCarrossel = (id:string) =>{
    navigate(`/home/serie/${id}`)

  }
  return (
    <div>
      <HomeHeader serie={data} />
      <div className="bg-neutral-600 pb-11">  
    <div className="pl-20 pb-11">
      
      <h3 className="h4-heading text-white pb-4">Temporadas</h3>
      
      <div  className="pb-10 flex flex-row gap-5" >
      {
        (data?.seasons.map((season)=>(
        <div key={season.id} className="w-60 ">
         <button onClick={()=> handleRedirect(season.season_number)}><img src={season.poster_path? apiImageUrl(season?.poster_path):semImg} className="w-full rounded-lg" alt="" /></button>
        </div>
        )))
      }
      </div>

      <div>
        <h3 className="h4-heading text-white pb-4">Similares</h3>
        <Carrossel data={carrossel} redirectCollection={handleRedirectCarrossel}/>
      </div>
    </div>
    </div>
    </div>
  )
}

export default SerieFilho
