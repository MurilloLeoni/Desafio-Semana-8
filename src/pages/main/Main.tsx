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
interface apiTeste{
  textos:serie|null|undefined;
  img:string |serie|null;
}
const Main = () => {
  const [serie, setSerie] = useState<apiTeste | null>();
 const [option, setOption] = useState<OptionsType|undefined>()
 const api = useApi(option)
  
 const [components, setComponents] = useState<Components>({
    movieOrSerie: false,
    showMovieSerie: false,
   
  });
  
  const location = useLocation();
  
  238;
  // apiRequest("GET", `https://api.themoviedb.org/3/tv/94997`)
  // apiRequest("GET", `https://api.themoviedb.org/3/tv/238`)
  useEffect(() => {
    switch (location.pathname) {
     
      case "/home":{
        
        setOption( apiRequest("GET", `https://api.themoviedb.org/3/tv/94997`))

        setSerie({
          textos:api,
          img:apiImageUrl(api?.backdrop_path)
        })
        setComponents({
          movieOrSerie: false,
          showMovieSerie: false,
          
        });
        return ;
      }
       
      case "/home/serie":{
        setOption( apiRequest("GET", `https://api.themoviedb.org/3/tv/94954`))

        setSerie({
          textos:api,
          img:apiImageUrl(api?.backdrop_path)
        })
        setComponents({
          movieOrSerie: true,
          showMovieSerie: true,
        });
        return;
      }
       
      case "/home/movie":{
        setOption( apiRequest("GET", `https://api.themoviedb.org/3/tv/76479'`))

        setSerie({
          textos:api,
          img:apiImageUrl(api?.backdrop_path)
        })
        
        setComponents({
          movieOrSerie: false,
          showMovieSerie: true,
        });
        return;
       }
      case "/home/celebrity":{
        setOption( apiRequest("GET", `https://api.themoviedb.org/3/tv/235484'`))

        setSerie({
          textos:api,
          img:apiImageUrl(api?.backdrop_path)
        })
        setComponents({
          movieOrSerie: false,
          showMovieSerie: false,
        });
        return;
      }
       
    }
  }, [location.pathname,api]);

 

  // const serie: serie | undefined = useApi(options);
  // let imgUrl: string = "";
  // if (serie) {
  //   imgUrl = apiImageUrl(serie?.backdrop_path);
  // }

  return (
    <div className="">
      <div
        className={" bg-no-repeat  bg-cover flex flex-col justify-between"}
        style={{ backgroundImage: `url(${serie?.img})` }}
      >
        <div className="image-bg-container">
          <Header />
          {components.showMovieSerie && (
            <SerieMovieTitle
              serie={serie?.textos}
              children={components.movieOrSerie ? "Séries" : "Filmes"}
            />
          )}
          <HomeHeader serie={serie?.textos} children={""} />
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
