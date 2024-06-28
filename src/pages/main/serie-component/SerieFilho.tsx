import Carrossel from "../../../components/Carrossel"
import img from "../../../img/Cover-1.png"

const SerieFilho = () => {
  return (
    <div className="pl-20 pb-11">
      <h3 className="h4-heading text-white pb-4">Temporadas</h3>
      
      <div className="pb-10 flex flex-row gap-5">
      <img src={img} alt="" />
      <img src={img} alt="" />
      </div>

      <div>
        <h3 className="h4-heading text-white pb-4">Similares</h3>
        <Carrossel/>
      </div>
    </div>
  )
}

export default SerieFilho
