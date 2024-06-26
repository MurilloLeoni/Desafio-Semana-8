// import { useEffect, useState } from "react";
import { apiImageUrl } from "../../shared/API/Config/Config";
import Home from "./home-component/Home";
import Movie from "./movie-component/Movie";
import Serie from "./serie-component/Serie";
import Header from "../../shared/header/Header";
import Celebrity from "./celebrity-component/Celebrity";
import { Route, Routes } from "react-router-dom";
import HomeHeader from "./home-component/HomeHeader";
import { apiRequest } from "../../shared/API/Config/Config";

import serie from "../../shared/API/Model/Serie";
import useApi from "../../shared/API/Hooks/useApi";

const Main = () => {
  // const [serie, setSerie] = useState<serie | null>();
  const options = apiRequest("GET", "https://api.themoviedb.org/3/tv/94997");
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
          <HomeHeader serie={serie} />
        </div>
      </div>
      <div className=" bg-neutral-600">
        <Routes>
          {/* <Route path="" element={<NotFound />}/> */}
          {/* <Route path="not" element={<NotFound2 />}/> */}

          <Route path="/" element={<Home />}></Route>
          <Route path="/movie" element={<Movie />}></Route>
          <Route path="/serie" element={<Serie />}></Route>
          <Route path="/celebrity" element={<Celebrity />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
