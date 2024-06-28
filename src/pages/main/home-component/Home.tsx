import Carrossel from "../../../components/Carrossel";

const Home = () => {
  return (
    <div className="ml-16 pt-2 pb-11">
      <div className="flex flex-col gap-2">
        <h4 className="h4-heading text-white">Coleções de halowen</h4>
        <div><Carrossel/></div>
        {/* <h4 className="h4-heading text-white">Séries em alta</h4>
        <div><Carrossel/></div>
        <h4 className="h4-heading text-white">Filmes em alta</h4>
        <div><Carrossel/></div> */}
      </div>
    </div>
  );
};

export default Home;
