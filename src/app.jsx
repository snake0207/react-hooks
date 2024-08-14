import { useEffect, useRef, useState } from "react";
import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useFadein } from "./hooks/useFadein";
import { useNetwork } from "./hooks/useNetwork";
import { useScroll } from "./hooks/useScroll";
import { useFullScreen } from "./hooks/useFullScreen";
import { useNotification } from "./hooks/useNotification";
import { useAxios } from "./hooks/useAxios";
import { useLocation } from "./hooks/useLocation";

export function App() {
  const { latitude, longitude, getLocation } = useLocation(true);

  return (
    <div>
      <h3>
        {latitude} / {longitude}
      </h3>
      <button onClick={getLocation}>Click me</button>
    </div>
  );
}
