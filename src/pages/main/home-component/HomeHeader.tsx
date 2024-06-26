import ButtonClicked from "../../../components/Buttons/ButtonClicked";
import { serieProps } from "../../../shared/Types/Types";

const HomeHeader = ({ serie }: serieProps) => {
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
        <p className="body-large text-white">{serie?.overview}</p>
        <div className="flex flex-wrap gap-6  grid-cols-2">
          <button className="  col-span-2 button-text rounded-sm px-6 py-2 bg-white hover:bg-opacity-40 gap-3 flex items-center text-center">
            <i className="fa-solid fa-play"></i>
            {"VER AGORA "}
          </button>

          <button className="button-text col-span-2    border  border-white rounded-sm px-6 py-2 text-white flex items-center gap-3 hover:bg-opacity-white-10 bg-opacity-black-10 ">
            <i className="fa-solid fa-circle-info  "></i>
            {"MAIS INFORMAÇÕES"}
          </button>

          <div className="flex gap-6">
            <ButtonClicked
              classChildren={"fa-solid fa-plus "}
              className={
                "bg-opacity-black-10 border col-span-1 border-white rounded-full px-6 py-5 text-white hover:text-black"
              }
            />
            <ButtonClicked
              classChildren={"fa-sharp fa-solid fa-star "}
              className={
                "bg-opacity-black-10 border col-span-1 border-white rounded-full px-6 py-5 text-white hover:text-black"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
