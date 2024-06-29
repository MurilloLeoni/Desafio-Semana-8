import axios, {AxiosRequestConfig, AxiosError} from "axios";
import { useEffect, useState, useMemo } from "react";
import { OptionsType } from "../../Types/Types";
import { useLocation } from "react-router-dom";
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

// const useApi = (options: OptionsType) => {
//   const location = useLocation()
//   const [dados, setDados] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.request(options);
//         // console.log(response.data)
//         setDados(response.data);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     // Clean up function (optional)
//     return () => {
//       // Cancelar a requisição axios se necessário
//     };
//   }, [location,options]); // Dependência opcional: options pode ser uma lista de dependências para atualizar o useEffect

//   // Retornar os resultados desejados
//   return { dados, loading, error };
// };

// Definindo tipos
interface OptionsType extends AxiosRequestConfig {}
interface ApiResponse<T> {
  data: T;
}

const useApi = <T = unknown>(options: OptionsType) => {
  const [dados, setDados] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | null>(null);

  // Memoizing options to ensure stability
  const stableOptions = useMemo(() => options, [JSON.stringify(options)]);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.request<ApiResponse<T>>(stableOptions);
        if (isMounted) {
          // console.log(response.data)
          setDados(response.data);
        }
      } catch (error) {
        if (isMounted) {
          setError(error as AxiosError);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [stableOptions]);

  return { dados, loading, error };
};

export default useApi;

