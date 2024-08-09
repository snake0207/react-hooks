import { useEffect, useRef } from "react";

export const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const refElement = useRef();

  useEffect(() => {
    if (refElement.current) {
      refElement.current.addEventListener("click", onClick);
    }
    return () => {
      if (refElement.current) {
        refElement.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return refElement;
};
