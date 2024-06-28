import ButtonClicked from "../Buttons/ButtonClicked";

const ButtonArea = () => {
  return (
    <div>
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
              classChildren={"fa-solid fa-plus fa-lg"}
              className={
                "bg-opacity-black-10 border col-span-1 border-white rounded-full px-6 py-5 text-white hover:text-black"
              }
            />
            <ButtonClicked
              classChildren={"fa-sharp fa-solid fa-star fa-md"}
              className={
                "bg-opacity-black-10 border col-span-1 border-white rounded-full px-6 py-5 text-white hover:text-black"
              }
            />
          </div>
        </div>
    </div>
  )
}

export default ButtonArea
