import { useEffect, useRef, useState } from "react";
import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useFadein } from "./hooks/useFadein";

export function App() {
  const refStyle = useFadein(5, 3);
  const pStyle = useFadein(10, 1);

  return (
    <div>
      <h1 {...refStyle}>Protect</h1>
      <p {...pStyle}>lorem ipsum dolor sit amet, consectetur adip</p>
    </div>
  );
}
