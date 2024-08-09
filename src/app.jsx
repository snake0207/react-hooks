import { useEffect, useRef, useState } from "react";
import { useClick } from "./hooks/useClick";
import { useConfirm } from "./hooks/useConfirm";
import { usePreventLeave } from "./hooks/usePreventLeave";
import { useFadein } from "./hooks/useFadein";
import { useNetwork } from "./hooks/useNetwork";
import { useScroll } from "./hooks/useScroll";

export function App() {
  const { x, y } = useScroll();

  return (
    <div style={{ height: `1000vh` }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
        Scroll : {y}
      </h1>
    </div>
  );
}
