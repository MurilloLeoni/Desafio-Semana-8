// import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import serie from "../../Serie";
import ButtonArea from "./ButtonArea";

type homeHeaderProps = {
  serie: serie;
  serieBtns: boolean;
  categorieBtns: boolean;
  collectionsBoll:boolean
};
const HomeHeader = ({ serie, serieBtns, categorieBtns,collectionsBoll }: homeHeaderProps) => {


  return (
    <div className=" flex flex-col py-40 px-4">
      <div className="flex flex-col ml-20 gap-5 max-w-[719px]">
        <h1 className="h1-heading text-white">{serie?.original_name}</h1>
        {collectionsBoll && <span className="text-white body-small items-center flex gap-2">
          {serie?.first_air_date.slice(0, 4)}
          <span className=" flex content-center w-0 bg-black">
            <i className="fa-solid fa-circle text-[4px] self-center"></i>
          </span>
         Seasons {serie?.number_of_seasons}
        </span>}
        {collectionsBoll && <p className="text-white caption">{serie?.genres[0].name}</p>}
        

        {serieBtns && <ButtonArea data={serie} />}
        <p className="body-large text-white">{serie?.overview}</p> 
        {categorieBtns && <ButtonArea data={serie} />}
      </div>
    </div>
  );
};

export default HomeHeader;
