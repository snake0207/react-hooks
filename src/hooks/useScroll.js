import { useEffect, useState } from "react";

export const useScroll = () => {
  const [status, setStatus] = useState({ x: 0, y: 0 });

  const handleScroll = () => {
    setStatus({ x: window.scrollX, y: window.scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return status;
};
