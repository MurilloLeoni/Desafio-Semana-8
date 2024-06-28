import axios from "axios";
import { useEffect, useState } from "react";
import { OptionsType } from "../../Types/Types";
const useApi = (options: OptionsType) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data);
        if (response) {
          setData(response.data);
        }
      })
      .catch(function (error) {
        console.error(error);
      })
  }, [options]);


  if (data) {
   
    return data;
  }
};

export default useApi;
