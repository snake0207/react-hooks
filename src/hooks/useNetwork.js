import { useEffect, useState } from "react";

export const useNetwork = (callback) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleNetworkChange = () => {
    if (typeof callback === "function") {
      callback(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, []);

  return status;
};
