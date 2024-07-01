import { Splide, SplideSlide } from "@splidejs/react-splide";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { apiRequest, apiImageUrl } from "../shared/API/Config";
// interface imgPath{
// poster_path:string
// }
import "@splidejs/react-splide/css";
import { apiImageUrl } from "../shared/API/Config/Config";
import semImg from "../assets/img/sem-img.jpg";

type carrosselType = {
  data: carrossel[] | null | undefined;
  redirectCollection: React.MouseEvent<HTMLElement>;
};

interface carrossel {
  id: string;
  poster_path: string;
}

const Carrossel = ({ data, redirectCollection }: carrosselType) => {
  function pages(): number | undefined {
    if (data){
      if (data.length <= 7) {
        return data?.length;
      }
    }
    return 7;
  }
  return (
    <div>
      <Splide
        tag="section"
        options={{
          type: "slide",
          direction: "ltr",
          breakpoints: {
            640: {
              perPage: 2,
            },
            800: {
              perPage: 3,
            },
            1024: {
              perPage: 4,
            },
            1200: {
              perPage: 7,
            },
          },
          rewind: true,
          rewindByDrag: true,
          arrows: false,
          pagination: true,
          perPage: pages(),
          gap: "20px",
          start: 1,
        }}
      >
        {data?.map((imagem) => (
          <SplideSlide key={imagem.id}>
            <img
              src={
                imagem.poster_path ? apiImageUrl(imagem?.poster_path) : semImg
              }
              onClick={() => redirectCollection(imagem.id)}
              className="w-[260px] h-[361px] rounded-lg object-cover"
              alt="sem imagem"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Carrossel;
