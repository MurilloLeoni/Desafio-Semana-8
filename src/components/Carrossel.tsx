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
      if (data.length < 7) {
        return 1;
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
          
          rewind: true,
          rewindByDrag: true,
          arrows: false,
          pagination: false,
          gap: "20px",
          start: 1,
          autoWidth:true
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
