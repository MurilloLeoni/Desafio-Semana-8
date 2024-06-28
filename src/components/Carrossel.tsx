import { Splide, SplideSlide } from "@splidejs/react-splide";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { apiRequest, apiImageUrl } from "../shared/API/Config";
// interface imgPath{
// poster_path:string
// }
import "@splidejs/react-splide/css";
import { apiImageUrl } from "../shared/API/Config/Config";

type carrosselType = {
  data: carrossel[] | null;
  redirectCollection?: React.MouseEvent<HTMLElement>;
};

interface carrossel {
  id: string;
  poster_path: string;
}

const Carrossel = ({ data, redirectCollection }:carrosselType) => {
  return (
    <div>
      <Splide
        tag="section"
        options={{
          type: "slide",
          direction: "ltr",
          rewind: true,
          rewindByDrag: true,
          arrows: false,
          start: 1,
        }}
      >
        <div className="flex gap-5">
          {data?.map((imagem) => (
            <SplideSlide key={imagem.id}>
              <img
                src={apiImageUrl(imagem?.poster_path)}
                onClick={() => redirectCollection(imagem.id)}
                className="w-[260px] h-[361px] rounded-lg object-cover"
                alt="teste"
              />
            </SplideSlide>
          ))}
        </div>
      </Splide>
    </div>
  );
};

export default Carrossel;
