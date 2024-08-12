import { useEffect, useRef, useState } from "react";
import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useFadein } from "./hooks/useFadein";
import { useNetwork } from "./hooks/useNetwork";
import { useScroll } from "./hooks/useScroll";
import { useFullScreen } from "./hooks/useFullScreen";

export function App() {
  const { refEle, fullScreen, exitFullScreen } = useFullScreen();

  return (
    <div width="80%" height="80%" style={{ border: `1px solid red` }}>
      <img ref={refEle} src="sea.jpg" />
      <button onClick={fullScreen}>Full Screen</button>
      <button
        onClick={exitFullScreen}
        style={{ position: "fixed", top: 0, left: 0 }}
      >
        Exit Full Screen
      </button>
    </div>
  );
}
