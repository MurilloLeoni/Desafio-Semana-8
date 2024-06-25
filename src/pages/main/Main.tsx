import axios from "axios";
import { useEffect, useState } from "react";
import { apiRequest, apiImageUrl } from "../../shared/API/Config";
import Home from "./home-component/Home";
import Movie from "./movie-component/Movie";
import Serie from "./serie-component/Serie";
import Header from "../../shared/header/Header";
import Celebrity from "./celebrity-component/Celebrity";


interface requisicao {
  poster_path: string;
  original_name: string;
  overview:string
  first_air_date:string
}

const Main = () => {
  const [movie, setMovie] = useState<requisicao | null>(null);
  let imgUrl: string = "";
  if (movie) {
    imgUrl = apiImageUrl(movie?.poster_path);
  }
  const options = apiRequest("GET", "https://api.themoviedb.org/3/tv/popular");

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results[0]);
        if (response) {
          setMovie({
            poster_path: response.data.results[0].poster_path,
            original_name: response.data.results[0].original_name,
            overview: response.data.results[0].overview,
            first_air_date: response.data.results[0].first_air_date
          });
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div className="">
          <div
            className={"w-screen h-screen  bg-no-repeat  bg-cover flex flex-col "} style={{backgroundImage: `url(${imgUrl})`}}>
            <Header />
      <div className=" flex flex-col ">
            
            <div className="flex flex-col ml-20 gap-5 w-[719px]">
            <h1 className="h1-heading text-white">{movie?.original_name}</h1>
            <span className="text-white body-small">{movie?.first_air_date.slice(0,4)}</span>
            <p className="text-white caption">{"Drama"}</p>
            <p className="body-large text-white">{movie?.overview}</p>
            <div className="flex gap-6 ">
              <button className="button-text rounded-sm px-6 py-2 bg-white gap-3"> <i className="fa-solid fa-play"></i> VER AGORA</button>

              <button className="button-text  border  border-white rounded-sm px-6 py-2 text-white flex items-center gap-3 bg-opacity-black-10 "> <i className="fa-solid fa-circle-info "></i> MAIS INFORMAÇÕES</button>


              <button className=" bg-opacity-black-10 border border-white rounded-full px-6 py-5 text-white"> <i className="fa-solid fa-plus"></i></button>
              <button className="button-text bg-opacity-black-10 border border-white rounded-full px-6 py-5 text-white"><i className="fa-sharp fa-solid fa-star"></i></button>
            </div>
            </div>
        </div>
      </div>
      <div className="parte dos filmes e imagem">
        <Home />
        <Movie />
        <Serie />
        <Celebrity />
      </div>
    </div>
  );
};

export default Main;
