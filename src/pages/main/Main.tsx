import { apiImageUrl } from "../../shared/API/Config/Config";
import Header from "../../shared/header/Header";
// import Celebrity from "./celebrity-component/Celebrity";
import Footer from "../../shared/footer/Footer";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import HomeHeader from "../../components/headers-home/HomeHeader";
import { apiRequest } from "../../shared/API/Config/Config";

import serie from "../../shared/API/Model/Serie";
import useApi from "../../shared/API/Hooks/useApi";
import SerieMovieTitle from "../../components/headers-home/SerieMovieTitle";
import { useEffect, useState } from "react";
import { OptionsType } from "../../shared/Types/Types";
import axios from "axios";

interface Components {
  movieOrSerie: boolean;
  showMovieSerie: boolean;
  serieBtns:boolean;
  categorieBtns:boolean
}
interface apiTeste {
  textos: serie | null | undefined;
  img: string | serie | null;
}
const Main = () => {




  const storage = window.localStorage.getItem("token")


  useEffect(()=>{
    const options = {
      method: 'POST',
      url: 'https://api.themoviedb.org/3/authentication/session/new',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTYwNjUxMi4wOTc2MjEsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiL73ROy94HbKkXvaRV_mLrna-JL8FjT0UyhZZkiYck'
      },
      data: {"request_token": storage}
    };

    axios
    .request(options)
    .then(function (response) {
      // console.log(response.data);
      window.localStorage.setItem("sessionId",response.data.session_id)
    })
    .catch(function (error) {
      console.error(error);
    });
  },[])


  const [serie, setSerie] = useState<apiTeste | null>();
  const [option, setOption] = useState<OptionsType | undefined>();
  const {dados} = useApi(option);

  const SerieID = useParams();

  const [components, setComponents] = useState<Components>({
    movieOrSerie: false,
    showMovieSerie: false,
    serieBtns:true,
    categorieBtns:false
  });


  const location = useLocation();
  // console.log(location.pathname);
  useEffect(() => {
    switch (location.pathname) {
      case "/home": {
        setOption(apiRequest("GET", `https://api.themoviedb.org/3/tv/94997`));

        setSerie({
          textos: dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie: false,
          showMovieSerie: false,
          serieBtns:false,
          categorieBtns:true
        });
        return;
      }

      case "/home/serie": {
        setOption(apiRequest("GET", 'https://api.themoviedb.org/3/tv/94954'));

        setSerie({
          textos: dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie: true,
          showMovieSerie: true,
          serieBtns:false,
          categorieBtns:true
        });
        return;
      }

      case "/home/movie": {
        setOption(apiRequest("GET", `https://api.themoviedb.org/3/tv/76479'`));

        setSerie({
          textos: dados,
          img: apiImageUrl(dados?.backdrop_path),
        });

        setComponents({
          movieOrSerie: false,
          showMovieSerie: true,
          serieBtns:false,
          categorieBtns:true
        });
        return;
      }
      case "/home/celebrity": {
        setOption(apiRequest("GET", `https://api.themoviedb.org/3/tv/235484'`));

        setSerie({
          textos: dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie: false,
          showMovieSerie: false,
          serieBtns:false,
          categorieBtns:true
        });
        return;
      }
      case `/home/serie/${SerieID.id}`: {
        setOption(apiRequest("GET", `https://api.themoviedb.org/3/tv/${SerieID.id}`));
        setSerie({
          textos: dados,
          img: apiImageUrl(dados?.backdrop_path),
        });
        setComponents({
          movieOrSerie: false,
          showMovieSerie: false,
          serieBtns:true,
          categorieBtns:false
        });
        return;
        
      }
    }
    
  }, [location.pathname,SerieID,dados]);

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
          <HomeHeader serie={serie?.textos}  categorieBtns={components.categorieBtns} serieBtns={components.serieBtns}/>
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
