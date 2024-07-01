import React, { useEffect, useState } from "react";
import HomeHeader from "../../../components/headers-home/HomeHeader";
import axios from "axios";
import { apiImageUrl, apiRequest } from "../../../shared/API/Config/Config";
import Carrossel from "../../../components/Carrossel";

const Celebrity = () => {
  const headerOpt = apiRequest("GET", `https://api.themoviedb.org/3/tv/235484`);
  const [headerSerie, setHeaderSerie] = useState();
  const [carrossel, setCarrossel] = useState([])
  useEffect(() => {
    axios
      .request(headerOpt)
      .then(function (response) {
        // console.log(response.data);
        setHeaderSerie(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const AtorOpt = {
    method: "GET",
    url: "https://api.themoviedb.org/3/person/popular",
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTcxNzkxOS4wMjcxNDUsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x2tOpI-s9VF6m74-llZeMGQytuVWKp5dsdHJ2ZTjBmk",
    },
  };
  useEffect(() => {
    axios
      .request(AtorOpt)
      .then(function (response) {
        // console.log(response.data.results);
        setCarrossel(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <HomeHeader serie={headerSerie} />
      {carrossel?.map((result)=>(
        <div className=" bg-neutral-600 pb-11" key={result?.id}>
        <div className="flex flex-col gap-2 ml-16 pt-2">
          <div className="flex gap-16">
            <div>
              <h4 className="h4-heading text-white pb-3">{result?.name}</h4>
              <img src={apiImageUrl(result?.profile_path)} className="w-[260px] h-[361px] rounded-lg object-cover"  alt="ator" />
            </div>
            <div>
              <h4 className="h4-heading text-white pb-3">Conhecido(a) por</h4>
              <Carrossel data={result?.known_for}/>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default Celebrity;
