import { useEffect, useState } from "react";

export const useToast = (msg, duration, props) => {
  const [width, setWidth] = useState("25vw");
  const toastStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    width: width,
    height: "32px",
    fontSize: "16px",
    padding: "8px 16px",
    bottom: "50px",
    color: "white",
    backgroundColor: "black",
  };

  const displayNone = () => {
    const element = document.getElementById("toast");
    element.style.display = "none";
  };

  const handleResize = () => {
    setWidth(window.innerWidth > 430 ? "25vw" : "100vw");
  };

  useEffect(() => {
    setTimeout(() => {
      displayNone();
    }, duration * 1000);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="toast" style={{ ...toastStyle, ...props }}>
      <label>{msg}</label>
      <label onClick={displayNone} style={{ fontSize: "24px" }}>
        &times;
      </label>
    </div>
  );
};
