import { Splide, SplideSlide } from "@splidejs/react-splide";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { apiRequest, apiImageUrl } from "../shared/API/Config";
// interface imgPath{
// poster_path:string
// }
import img from "../assets/img/cover.png";
import '@splidejs/react-splide/css';

const Carrossel = () => {
  //   const [img, setImg] = useState<imgPath[]>([]);
  //   let imgUrl: string = "";

  //   if (img) {
  //     // imgUrl = apiImageUrl(img?.poster_path);
  //   }
  //   const options = apiRequest(
  //     "GET",
  //     "https://api.themoviedb.org/3/tv/airing_today"
  //   );

  //   useEffect(() => {
  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         response.data.results.map((element) => {
  //             console.log(element)
  //             if (element) {
  //               setImg([
  //                 ...img,
  //                 {
  //                   poster_path: apiImageUrl(element.poster_path),
  //                 },
  //               ]);

  //               //   console.log(img)
  //             }
  //           })
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }, []);


  const imgArr = [
    {
    id:1,
    image:img
  },
    {
    id:2,
    image:img
  },
    {
    id:3,
    image:img
  },
    {
    id:4,
    image:img
  },
    {
    id:5,
    image:img
  },
    {
    id:6,
    image:img
  },
    {
    id:7,
    image:img
  },
    {
    id:8,
    image:img
  },
    {
    id:9,
    image:img
  },
    {
    id:10,
    image:img
  },
]
  return (
    <div>
      <Splide tag="section"
      options={
       {
        type:'slide',
        direction   : 'ltr',
        rewind:true,
        rewindByDrag: true,
        arrows:false,
        start:1
       }
      }>
      <div className="flex gap-5">
            {imgArr.map((imagem) =>(
              <SplideSlide key={imagem.id}>
              <img src={imagem.image} className="w-[260px] h-[361px] rounded-lg object-cover" alt="teste" />
            </SplideSlide>
            ))}
          </div>
      </Splide>
    </div>
  );
};

export default Carrossel;
