import { useEffect, useState } from "react";

export const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);

  useEffect(() => {
    const hTitle = document.querySelector("title");
    hTitle.innerText = title;
  }, [title]);

  return setTitle;
};
