import { useNavigate , redirectDocument, useParams  } from "react-router-dom";
import { apiRequest } from "../shared/API/Config/Config";
import { useEffect, useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate()
  
 
//  console.log(redirectDocument)
 
  // href={https://www.themoviedb.org/authenticate/${requestTk?.request_token}?redirect_to=http://localhost:5173/home}
const handleClick = () =>{
 const option = apiRequest("GET","https://api.themoviedb.org/3/authentication/token/new")
 axios
    .request(option)
    .then(function (response) {
      // console.log(response.data)
      window.location.href=`https://www.themoviedb.org/authenticate/${response.data.request_token}?redirect_to=http://localhost:5173/home`
      
 })
    .catch(function (error) {
      console.error(error);
    });
    // navigate("/home")

  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[url('src/assets/img/bg-login.png')] bg-cover bg-center">
      <div className="border-none flex flex-col justify-center items-center text-center gap-6 border-1 p-7 rounded-[20px] text-white backdrop-blur bg-customColor md:w-[783px] md:h-[454px]">
        <h1 className="h1-heading leading-[51.61px] whitespace-nowrap">
          Compass Video
        </h1>
        <p className="text-center body-large font-normal text-[20px] w-[278px]">
          Acesse sua conta para ver nossos títulos
        </p>
        <button onClick={handleClick} className="bg-primary-300 px-9 py-3 rounded tracking-[0.14em] button-text md:px-14">
          INICIAR SESSÃO COM TMDB
        </button>
        <div className="flex body-small">
          <p className="opacity-60">Não tem conta?</p>
          <a href="#" className="ml-1">
            Acesse como convidado
          </a>
        </div>
        <img
          src="/src/assets/img/logo-compass-uol.png"
          alt="logo compass uol"
          className="w-80 h-28"
        />
      </div>
    </div>
  );
};

export default Login;
