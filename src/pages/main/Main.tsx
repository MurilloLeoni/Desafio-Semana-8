import axios from "axios";
import { useEffect, useState } from "react";
import { apiRequest, apiImageUrl } from "../../shared/API/Config";
import Home from "./home-component/Home";
import Movie from "./movie-component/Movie";
import Serie from "./serie-component/Serie";
import Header from "../../shared/header/Header";
import Celebrity from "./celebrity-component/Celebrity";
import ButtonClicked from "../../components/ButtonClicked";

interface requisicao {
  poster_path: string;
  original_name: string;
  overview: string;
  first_air_date: string;
  genres: string;
  number_of_seasons: number;
}

const Main = () => {
  const [movie, setMovie] = useState<requisicao | null>(null);
  let imgUrl: string = "";

  if (movie) {
    imgUrl = apiImageUrl(movie?.poster_path);
  }
  const options = apiRequest("GET", "https://api.themoviedb.org/3/tv/94997");

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        if (response) {
          setMovie({
            poster_path: response.data.backdrop_path,
            original_name: response.data.original_name,
            overview: response.data.overview,
            first_air_date: response.data.first_air_date,
            genres: response.data.genres[0].name,
            number_of_seasons: response.data.number_of_seasons,
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
        className={" bg-no-repeat  bg-cover flex flex-col justify-between"}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <Header />
        <div className=" flex flex-col py-40 px-4">
          <div className="flex flex-col ml-20 gap-5 max-w-[719px]">
            <h1 className="h1-heading text-white">{movie?.original_name}</h1>
            <span className="text-white body-small items-center flex gap-2">
              {movie?.first_air_date.slice(0, 4)}{" "}
              <span className=" flex content-center w-0 bg-black">
                <i className="fa-solid fa-circle text-[4px] self-center"></i>{" "}
              </span>{" "}
              Seasons {movie?.number_of_seasons}
            </span>
            <p className="text-white caption">{movie?.genres}</p>
            <p className="body-large text-white">{movie?.overview}</p>
            <div className="flex flex-wrap gap-6  grid-cols-2">
              <button className="  col-span-2 button-text rounded-sm px-6 py-2 bg-white hover:bg-opacity-40 gap-3 flex items-center text-center">
                <i className="fa-solid fa-play"></i>
                {"VER AGORA "}
              </button>

              <button className="button-text col-span-2    border  border-white rounded-sm px-6 py-2 text-white flex items-center gap-3 hover:bg-opacity-white-10 bg-opacity-black-10 ">
                <i className="fa-solid fa-circle-info  "></i>
                {"MAIS INFORMAÇÕES"}
              </button>

              <div className="flex gap-6">
                <ButtonClicked
                  classChildren={"fa-solid fa-plus "}
                  className={
                    "bg-opacity-black-10 border col-span-1 border-white rounded-full px-6 py-5 text-white hover:text-black"
                  }
                />
                <ButtonClicked
                  classChildren={"fa-sharp fa-solid fa-star "}
                  className={
                    "bg-opacity-black-10 border col-span-1 border-white rounded-full px-6 py-5 text-white hover:text-black"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-neutral-600">
        <Home />
        {/* <Movie />
        <Serie />
        <Celebrity /> */}
      </div>
    </div>
  );
};

export default Main;
