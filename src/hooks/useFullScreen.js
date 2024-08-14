import { useRef } from "react";

export const useFullScreen = () => {
  const refEle = useRef();
  const fullScreen = () => {
    const ele = refEle.current;
    if (ele.requestFullscreen) {
      ele.requestFullscreen();
    } else if (ele.MozRequestFullscreen) {
      // firefox
      ele.MozRequestFullscreen();
    } else if (ele.webkitRequestFullscreen) {
      // opera
      ele.webkitRequestFullscreen();
    } else if (ele.msRequestFullscreen) {
      // microsoft
      ele.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    document.exitFullscreen();
    if (document.exitFullScreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullscreen) {
      document.webkitCancelFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  return { refEle, fullScreen, exitFullScreen };
};
