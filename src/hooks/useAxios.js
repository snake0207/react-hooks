import axios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (opts, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [reload, setReload] = useState(Date.now());

  const refetch = () => {
    setState({ ...state, loading: true });
    setReload(Date.now());
  };

  useEffect(() => {
    axiosInstance(opts).then((resp) => console.log(resp));
  }, [reload]);

  return { ...state, refetch };
};
