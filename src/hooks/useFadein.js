import { useEffect, useRef } from "react";

export const useFadein = (duration = 1, delay) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const el = useRef();

  useEffect(() => {
    if (el.current) {
      console.log(el.current);
      el.current.style.opacity = 1;
      el.current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    }
  }, []);

  return { ref: el, style: { opacity: 0 } };
};
