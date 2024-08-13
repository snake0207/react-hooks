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

export function App() {
  const [count, setCount] = useState(0);
  const opts = { url: `https://yts.mx/api/v2/list_movies.json` };
  const { loading, error, data, refetch } = useAxios(opts);
  console.log(`loading:${loading}\nerror:${error}\ndata:${data}`);

  return (
    <div>
      <button onClick={() => refetch(count)}>Fetch Data</button>
    </div>
  );
}
