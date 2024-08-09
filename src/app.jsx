import { useEffect, useRef, useState } from "react";
import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useFadein } from "./hooks/useFadein";
import { useNetwork } from "./hooks/useNetwork";

export function App() {
  const callback = (onLine) => {
    console.log(`Network is `, onLine ? "Online" : "Offline");
  };
  const network = useNetwork(callback);

  return (
    <div>
      <h1>{network ? "Online" : "Offline"}</h1>
    </div>
  );
}
