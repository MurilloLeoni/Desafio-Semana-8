import { apiImageUrl } from "../../shared/API/Config/Config";
import Header from "../../shared/header/Header";
// import Celebrity from "./celebrity-component/Celebrity";
import Footer from "../../shared/footer/Footer";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import HomeHeader from "../../components/headers-home/HomeHeader";
import { apiRequest } from "../../shared/API/Config/Config";

import serie from "../../shared/API/Model/Serie";
import useApi from "../../shared/API/Hooks/useApi";
import SerieMovieTitle from "../../components/headers-home/SerieMovieTitle";
import { useEffect, useState } from "react";
import { OptionsType } from "../../shared/Types/Types";
interface Components {
  movieOrSerie: boolean;
  showMovieSerie: boolean;
}
const Main = () => {
  // const [serie, setSerie] = useState<serie | null>();
  const [components, setComponents] = useState<Components>({
    movieOrSerie: false,
    showMovieSerie: false,
  });
  const options: OptionsType = apiRequest(
    "GET",
    `https://api.themoviedb.org/3/tv/94997`
  );
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/home":
        setComponents({
          movieOrSerie: false,
          showMovieSerie: false,
        });
        return;
      case "/home/serie":
        setComponents({
          movieOrSerie: true,
          showMovieSerie: true,
        });
        return;
      case "/home/movie":
        setComponents({
          movieOrSerie: false,
          showMovieSerie: true,
        });
        return;
      case "/home/celebrity":
        setComponents({
          movieOrSerie: false,
          showMovieSerie: false,
        });
        return;
    }
  }, [location]);

  const serie: serie | undefined = useApi(options);
  let imgUrl: string = "";
  if (serie) {
    imgUrl = apiImageUrl(serie?.backdrop_path);
  }

  return (
    <div className="">
      <div
        className={" bg-no-repeat  bg-cover flex flex-col justify-between"}
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="image-bg-container">
          <Header />
          {components.showMovieSerie && (
            <SerieMovieTitle
              serie={serie}
              children={components.movieOrSerie ? "Séries" : "Filmes"}
            />
          )}
          <HomeHeader serie={serie} children={""} />
        </div>
      </div>
      <div className=" bg-neutral-600">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
