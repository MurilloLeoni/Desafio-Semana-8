import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import { apiRequest } from "../shared/API/Config/Config";
import axios from "axios";
import Carrossel from "../components/Carrossel";

const searchURL = "https://api.themoviedb.org/3/search/";
const apiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTQzNzk0M2M5YWFhODcxMDhjNmViNzk4OWZkMTg0MCIsIm5iZiI6MTcxOTI2OTM5My4xMTgzNTIsInN1YiI6IjY2NzlmNjliYjUxYzg4MzU5NTNiNDAxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B68cDtxz79f0-7mmzUdbWn9pdXzNw_9T7JvTHVXrF-I";

interface MediaItem {
  id: string;
  poster_path: string;
}

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [carrossel, setCarrossel] = useState<carrossel[]>([]);
  
    useEffect(() => {
      const getSearchedMovies = async (url: string) => {
        try {
          const requestConfig = apiRequest('GET', url);
          
          const response = await axios.request(requestConfig);
          //console.log(response.data);
          setCarrossel(response.data.results)
        } catch (error) {
          console.error("Erro ao buscar filmes:", error);
        }
      };
  
      if (query) {
        const searchWithQueryURL = `${searchURL}?api_key=${apiKey}&query=${query}`;
        getSearchedMovies(searchWithQueryURL);
      }
    }, [query]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const type = searchParams.get("type");
  const [results, setResults] = useState<MediaItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getSearchedItems = async (url: string) => {
      try {
        const requestConfig = apiRequest("GET", url);
        const response = await axios.request(requestConfig);
        setResults(response.data.results);
      } catch (error) {
        console.error("Erro ao buscar itens:", error);
      }
    };

    if (query && type) {
      const searchWithQueryURL = `${searchURL}/${type.toLowerCase()}?api_key=${apiKey}&query=${query}`;
      getSearchedItems(searchWithQueryURL);
    }
  }, [query, type]);

  const handleFilmes = (id: string) => {
    navigate(`/home/movie/${id}`);
  };

  return (
    <div className="w-screen h-screen flex flex-col bg-neutral-600">
      {/* <Header /> */}
      <div className="flex-grow flex flex-col ml-[78px] mt-16 h3-heading text-white">
      <Header />
      <div className="flex-grow flex flex-col pl-[78px] pt-16 h3-heading text-white">
        <h2>
          <span className="h3-heading-normal">Resultados para sua busca: </span>
          <span className="">"{query}"</span>
        </h2>      
        <div className="mt-6">
        {carrossel.length > 0 ? (
            <div>
              <Carrossel data={carrossel} />{" "}
            </div>
          ) : (
            <p className="text-white body-review opacity-60">Sem resultados</p>
          )}
        </div>
          <span className="opacity-60">Resultados para sua busca: </span>
          <span>{query}</span>
        </h2>
          <div>
            <Carrossel data={results} redirectCollection={handleFilmes} />
          </div>
      </div>
      <div className="mt-28">
      {/* <Footer /> */}
      <div className="pb-11 pt-11">
        
      </div>
    </div>
  );
};

export default Search;
