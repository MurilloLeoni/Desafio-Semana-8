import { apiImageUrl } from "../../shared/API/Config/Config";
import Header from "../../shared/header/Header";
// import Celebrity from "./celebrity-component/Celebrity";
import Footer from "../../shared/footer/Footer";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { apiRequest } from "../../shared/API/Config/Config";

import serie from "../../shared/API/Model/Serie";
import useApi from "../../shared/API/Hooks/useApi";
import SerieMovieTitle from "../../components/headers-home/SerieMovieTitle";
import { useEffect, useState } from "react";
import { OptionsType } from "../../shared/Types/Types";
import axios from "axios";
interface apiTeste {
  img: string | serie | null;
}
const Main = () => {

  useEffect(() => {
    const loginMethod: string | null = window.localStorage.getItem("loginMethod");

    if (loginMethod === "tmdb"){
      const storage: string | null = window.localStorage.getItem("token");
      const options = {
      method: "POST",
      url: "https://api.themoviedb.org/3/authentication/session/new",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTYwNjUxMi4wOTc2MjEsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiL73ROy94HbKkXvaRV_mLrna-JL8FjT0UyhZZkiYck",
      },
      data: { request_token: storage },
    };

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        window.localStorage.setItem("sessionId", response.data.session_id);
      })
      .catch(function (error) {
        console.error(error);
      });
    } else if (loginMethod === "guest") {
      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/authentication/guest_session/new',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTYwNjUxMi4wOTc2MjEsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiL73ROy94HbKkXvaRV_mLrna-JL8FjT0UyhZZkiYck'
        }
      };
      
      axios
        .request(options)
        .then(function (response) {
          //console.log(response.data);
            window.localStorage.setItem("guestId", response.data.guest_session_id);
        })
        .catch(function (error) {
          console.error(error);
        });
      }
  }, []);

  const [serie, setSerie] = useState<apiTeste | null>();
  const [option, setOption] = useState<OptionsType | undefined>();
  const { dados } = useApi(option);

  const SerieID = useParams();

  const location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/home": {
        setOption(apiRequest("GET", `https://api.themoviedb.org/3/tv/94997`));

        setSerie({
          img: apiImageUrl(dados?.backdrop_path),
        });
        return;
      }

      case "/home/serie": {
        setOption(apiRequest("GET", "https://api.themoviedb.org/3/tv/94954"));

        setSerie({
          img: apiImageUrl(dados?.backdrop_path),
        });
        return;
      }

      case "/home/movie": {
        
        setOption(apiRequest("GET", `https://api.themoviedb.org/3/movie/573435'`));

        setSerie({
          img: apiImageUrl(dados?.backdrop_path),
        });
        return;
      }
      case "/home/celebrity": {
        setOption(apiRequest("GET", `https://api.themoviedb.org/3/tv/235484'`));

        setSerie({
          img: apiImageUrl(dados?.backdrop_path),
        });
        return;
      }
      case `/home/serie/${SerieID.id}`: {
        setOption(
          apiRequest("GET", `https://api.themoviedb.org/3/tv/${SerieID.id}`)
        );
        setSerie({
          img: apiImageUrl(dados?.backdrop_path),
        });
        return;
      }
      case `/home/collection/${SerieID.id}`: {
        setOption(
          apiRequest(
            "GET",
            `https://api.themoviedb.org/3/collection/${SerieID.id}`
          )
        );
        setSerie({
          img: apiImageUrl(dados?.backdrop_path),
        });
        return;
      }
      case `/home/movie/${SerieID.id}`: {
        setOption(
          apiRequest(
            "GET",
            `https://api.themoviedb.org/3/movie/${SerieID.id}`
          )
        );
        setSerie({
          img: apiImageUrl(dados?.backdrop_path),
        });
        return;
      }
    }
  }, [location.pathname, SerieID, dados]);

  return (
    <div className="">
      <div
        className={
          " bg-no-repeat h-screen bg-cover flex flex-col justify-between pb-11 "
        }
        style={{ backgroundImage: `url(${serie?.img})` }}
      >
        <Header />
        {/* <SerieMovieTitle
            serie={serie?.textos}
            children={components.movieOrSerie ? "Séries" : "Filmes"}
          /> */}
        <Outlet />        
        <Footer />
      </div>
    </div>
  );
};

export default Main;
