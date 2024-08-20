import React, { useEffect, useRef, useState } from "react";
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
import { useToast } from "./hooks/useToast";
import { usePopup } from "./hooks/usePopup";
import { usePrevious } from "./hooks/usePrevious";
import { useSelect } from "./hooks/useSelect";

const friends = [
  { id: 1, name: "Phoebe", age: "P35-" },
  { id: 2, name: "Rachel", age: "R27" },
  { id: 3, name: "Ross", age: "S14" },
];

export function App() {
  const select = useSelect(friends, "name", "age", (target) =>
    console.log(`onChange value : ${target}`)
  );

  return <div>{select}</div>;
}
