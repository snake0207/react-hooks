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
import { useToast } from "./hooks/useToast";
import { usePopup } from "./hooks/usePopup";

export function App() {
  const onConfirm = () => {
    console.log("handleConfirm");
  };

  const popup = usePopup({
    title: "Title",
    message: "Are you delete this record ?",
    onConfirm: onConfirm,
  });

  return <div>{popup}</div>;
}
