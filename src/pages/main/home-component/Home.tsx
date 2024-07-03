import { useEffect, useState } from "react";
import Carrossel from "../../../components/Carrossel";
import { apiRequest } from "../../../shared/API/Config/Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import HomeHeader from "../../../components/headers-home/HomeHeader";
interface carrossel {
  id: string;
  poster_path: string;
}
interface data {
  results:carrossel[]
}
import useApi from "../../../shared/API/Hooks/useApi";
const Home = () => {
  // const [serie, setSerie] = useState<carrossel[] | null>(null);

  const [Collection, setCollection] = useState<carrossel[] | null>(null);
  const [movie, setMovie] = useState<carrossel[] | null>(null);

  const navigate = useNavigate();

  const headerOpt = apiRequest("GET", `https://api.themoviedb.org/3/tv/94997`);
  const { dados } = useApi(headerOpt);

  const serieOptions = apiRequest(
    "GET",
    "https://api.themoviedb.org/3/tv/airing_today"
  );

  const  serie  = useApi<data | null>(serieOptions);
  
  // console.log(serie)
  // useEffect(() => {
  //   axios
  //     .request(serieOptions)
  //     .then(function (response) {
  //       // console.log(response.data.results);
  //       setSerie(response.data.results);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, []);

  const collectionsOpt = {
    method: "GET",
    url: "https://api.themoviedb.org/3/search/collection",
    params: {
      query: "horror",
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTYwNjUxMi4wOTc2MjEsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiL73ROy94HbKkXvaRV_mLrna-JL8FjT0UyhZZkiYck",
    },
  };

  useEffect(() => {
    axios
      .request(collectionsOpt)
      .then(function (response) {
        // console.log(response.data);
        setCollection(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const movieOpt = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/now_playing",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTcxNzkxOS4wMjcxNDUsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x2tOpI-s9VF6m74-llZeMGQytuVWKp5dsdHJ2ZTjBmk",
    },
  };
  useEffect(() => {
    axios
      .request(movieOpt)
      .then(function (response) {
        // console.log(response.data.results);
        setMovie(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log();

  const handleCollection = (id: string) => {
    // console.log("collection",id);
    navigate(`/home/collection/${id}`);
  };

  const handleSeries = (id: string) => {
    navigate(`/home/serie/${id}`);
  };
  const handleFilmes = (id: string) => {
    navigate(`/home/movie/${id}`);
  };

  return (
    <div>
      <HomeHeader serie={dados} />
      <div className=" bg-neutral-600 pb-11 ">
        <div className="ml-16 pt-2">
          <div className="flex flex-col gap-2">
            <h4 className="h4-heading text-white">Coleções de halowen</h4>
            <div>
              <Carrossel
                data={Collection}
                redirectCollection={handleCollection}
              />
            </div>
            <h4 className="h4-heading text-white">Séries em alta</h4>
            <div>
              <Carrossel data={serie.dados?.results} redirectCollection={handleSeries} />
            </div>
            <h4 className="h4-heading text-white">Filmes em alta</h4>
            <div>
              <Carrossel data={movie} redirectCollection={handleFilmes} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
