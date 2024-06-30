import axios, {AxiosRequestConfig, AxiosError} from "axios";
import { useEffect, useState, useMemo } from "react";
// Definindo tipos
interface OptionsType extends AxiosRequestConfig {}
interface ApiResponse<T> {
  data: T;
}

const useApi = <T>(options: OptionsType) => {
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

