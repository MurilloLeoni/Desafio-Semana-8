import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { apiRequest, apiImageUrl } from "../shared/API/Config";
// interface imgPath{
// poster_path:string
// }
import img from "../assets/cover.png"

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

  return (
    <div>
      
      <Splide hasTrack={ false } aria-label="">
  <SplideTrack>
    <div className="gap-3 flex">

    <SplideSlide>
    <img src={img} width={"200px"} height={"200px"} alt="" />
    </SplideSlide>

    <SplideSlide>
    <img src={img} width={"200px"} height={"200px"} alt="" />
    </SplideSlide>
    <SplideSlide>
    <img src={img} width={"200px"} height={"200px"} alt="" />
    </SplideSlide>
    <SplideSlide>
    <img src={img} width={"200px"} height={"200px"} alt="" />
    </SplideSlide>
    <SplideSlide>
    <img src={img} width={"200px"} height={"200px"} alt="" />
    </SplideSlide>
    <SplideSlide>
    <img src={img} width={"200px"} height={"200px"} alt="" />
    </SplideSlide>
    </div>
  </SplideTrack>
  
  <div className="splide__progress">
    <div className="splide__progress__bar" />
  </div>


  <div className="splide__arrows">
    <button className="splide__arrow splide__arrow--prev">Prev</button>
    <button className="splide__arrow splide__arrow--next">Next</button>
  </div>
</Splide>
      
    </div>
  );
};

export default Carrossel;
