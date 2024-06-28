// import { Route, Routes } from "react-router-dom";
import { serieProps } from "../../shared/Types/Types";
import ButtonArea from "./ButtonArea";
import { useState } from "react";

const HomeHeader = ({ serie }: serieProps) => {
  const [serieBtns, setSerieBtns] = useState(false);
  const [categorieBtns, setCategorieBtns] = useState(true);

  return (
    <div className=" flex flex-col py-40 px-4">
      <div className="flex flex-col ml-20 gap-5 max-w-[719px]">
        <h1 className="h1-heading text-white">{serie?.original_name}</h1>
        <span className="text-white body-small items-center flex gap-2">
          {serie?.first_air_date.slice(0, 4)}{" "}
          <span className=" flex content-center w-0 bg-black">
            <i className="fa-solid fa-circle text-[4px] self-center"></i>{" "}
          </span>{" "}
          Seasons {serie?.number_of_seasons}
        </span>

        <p className="text-white caption">{serie?.genres[0].name}</p>

        {serieBtns && <ButtonArea />}
        <p className="body-large text-white">{serie?.overview}</p>
        {categorieBtns && <ButtonArea />}
      </div>
    </div>
  );
};

export default HomeHeader;
