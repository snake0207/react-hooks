import { useEffect, useRef, useState } from "react";
import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useFadein } from "./hooks/useFadein";
import { useNetwork } from "./hooks/useNetwork";
import { useScroll } from "./hooks/useScroll";
import { useFullScreen } from "./hooks/useFullScreen";
import { useNotification } from "./hooks/useNotification";

export function App() {
  const title = "Chekc your system !";
  const options = {
    body: `click me`,
    image: `https://acrofuture.com/images/acrofuture.svg`,
  };
  const notification = useNotification(title, options);

  return (
    <div>
      <button onClick={notification}>Fire Notification</button>
    </div>
  );
}
