import axios from "axios";
import { useEffect, useState } from "react";
import { OptionsType } from "../../Types/Types";
// const useApi = (options: OptionsType) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     axios
//       .request(options)
//       .then(function (response) {
//         console.log(response.data);
//         if (response) {
//           setData(response.data);
          
//         }
//       })
//       .catch(function (error) {
//         console.error(error);
//       }).finally(() =>{
       
//       })
      
//   }, []);


//   if (data) {
   
//     return data;
//   }
// };

const useApi = (options: OptionsType) => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        // console.log(response.data)
        setDados(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Clean up function (optional)
    return () => {
      // Cancelar a requisição axios se necessário
    };
  }, [options]); // Dependência opcional: options pode ser uma lista de dependências para atualizar o useEffect

  // Retornar os resultados desejados
  return { dados, loading, error };
};

export default useApi;
