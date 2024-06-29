import { useEffect, useState } from "react"
import Carrossel from "../../../components/Carrossel"
import { apiImageUrl, apiRequest } from "../../../shared/API/Config/Config"
import axios from "axios"
import serie from "../../../shared/API/Model/Serie"
import { useParams } from "react-router-dom"
import semImg from "../../../assets/img/sem-img.jpg"



const SerieFilho = () => {
  const params = useParams()
  const [data, setData] = useState<serie>()
  const options = apiRequest("GET",`https://api.themoviedb.org/3/tv/${params.id}`)
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
  },[])
  return (
    <div className="pl-20 pb-11">
      <h3 className="h4-heading text-white pb-4">Temporadas</h3>
      
      <div  className="pb-10 flex flex-row gap-5" >
      {
        (data?.seasons.map((season)=>(
        <div key={season.id} className="w-60 ">
         <img src={season.poster_path? apiImageUrl(season?.poster_path):semImg} className="w-full rounded-lg" alt="" />
        </div>
        )))
      }
      </div>

      <div>
        <h3 className="h4-heading text-white pb-4">Similares</h3>
        <Carrossel />
      </div>
    </div>
  )
}

export default SerieFilho
