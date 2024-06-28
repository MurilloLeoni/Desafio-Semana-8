import { useEffect, useState } from "react";
import Carrossel from "../../../components/Carrossel";
import { apiRequest } from "../../../shared/API/Config/Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface carrossel {
  id: string;
  poster_path: string;
}
const Home = () => {
  const [data, setData] = useState<carrossel[] | null>(null);

  const navigate = useNavigate()

  const options = apiRequest(
    "GET",
    "https://api.themoviedb.org/3/tv/popular"
  );
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.results);
        setData(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const handleCollection = (id: string) => {
    console.log("collection",id);
  }

  const handleSeries = (id:string) =>{
    navigate(`/home/serie/${id}`)
  }
  const handleFilmes = (id:string) =>{
    console.log("filmes",id)
  }

  return (
    <div className="ml-16 pt-2 pb-11">
      <div className="flex flex-col gap-2">
        <h4 className="h4-heading text-white">Coleções de halowen</h4>
        <div>
          <Carrossel data={data} redirectCollection={handleCollection}/>
        </div>
        <h4 className="h4-heading text-white">Séries em alta</h4>
        <div>
          <Carrossel data={data} redirectCollection={handleSeries} />
        </div>
        <h4 className="h4-heading text-white">Filmes em alta</h4>
        <div>
          <Carrossel data={data} redirectCollection={handleFilmes}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
