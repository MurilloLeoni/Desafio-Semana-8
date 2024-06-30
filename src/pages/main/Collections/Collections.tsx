import { useEffect, useState } from "react";
import Carrossel from "../../../components/Carrossel";
import axios from "axios";
import { useParams } from "react-router-dom";
import HeadersCollections from "../../../components/headers-home/HeadersCollections";
interface carrossel {
  id: string;
  poster_path: string;
}
const Collections = () => {
  const [Collection, setCollection] = useState<carrossel[] | null>(null);
  const [headerColl,setHeaderColl] = useState()
  const SerieID = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/collection/${SerieID.id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTYwNjUxMi4wOTc2MjEsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eiL73ROy94HbKkXvaRV_mLrna-JL8FjT0UyhZZkiYck",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        setCollection(response.data.parts);
        setHeaderColl(response.data)
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [SerieID.id]);

  const handleCollection = (id: number) => {
    console.log(id);
  };
  return (
    <div>
      
      <HeadersCollections data={headerColl}/>
      
      <div className="bg-neutral-600 pb-11 pt-11">
      <div className="ml-16 pt-2 pb-11">
        <div className="flex flex-col gap-2">
          <h4 className="h4-heading text-white">Coleções</h4>
          <div>
            <Carrossel
              data={Collection}
              redirectCollection={handleCollection}
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Collections;
