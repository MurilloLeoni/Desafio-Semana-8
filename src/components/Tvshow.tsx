import axios from "axios";
import img from "../assets/img/cover.png";
import SeasonHeader from "./headers-home/SeasonHeader";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiImageUrl } from "../shared/API/Config/Config";

interface seasonEpsode{
  epsode_number:number;
  name:string;
  overview:string;
  still_path:string;
  runtime:number
}

interface season {
  name:string
  overview:string;
  air_date:string;
  vote_average:number;
  episodes:seasonEpsode[]
}

const Tvshow = () => {
  const params = useParams()
  const [season,setSeason] = useState<season>()
  const epsodesOptions = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${params.id}/season/${params.season_number}`,
    params: {language: 'en-US'},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTg1NDQ0Mi42NDEzNiwic3ViIjoiNjY3OWY2OWJiNTFjODgzNTk1M2I0MDE2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xx9HsfPCJQKF1HRn1i8vyAJM6eSqaNUYRw8Ak1sVyPE'
    }
  };
  
  useEffect(()=>{
    axios
    .request(epsodesOptions)
    .then(function (response) {
      // console.log(response.data);
      setSeason(response.data)
    })
    .catch(function (error) {
      console.error(error);
    });
  },[])

  return (
    <div>
      <SeasonHeader data={season}/>
      <div className="bg-neutral-600 pb-11 ">
        <div className="ml-16 pt-2">
          <div>
          <h1 className="h3-heading text-white ">Episódios</h1>
          <div className="grid grid-cols-2 gap-3   md:grid-cols-2  p-2 ">
            {season?.episodes.map((epsode)=>(
              <button key={epsode.epsode_number} className="bg-opacity-white-10 mr-10 cols rounded-lg flex  mb-4 md:flex-row flex-col">
              <img
                src={apiImageUrl(epsode?.still_path)}
                alt={`Cover `}
                className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none w-full md:w-[180px] h-auto md:h-full"
              />
              <div className="flex flex-col  py-2 px-4">
                <div className="flex items-center justify-between w-full">
                  <h3 className=" body-review-bold text-neutral-100 ">
                   {epsode?.name}
                  </h3>
                  <p className=" text-neutral-200 body-small">{epsode?.runtime} min</p>
                </div>
                <p className="body-small text-neutral-200 self-end">
                  {epsode?.overview}
                </p>

              </div>
            </button>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tvshow;
