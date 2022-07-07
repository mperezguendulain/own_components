import { useState } from "react";

export const CountButton = React.memo(() => {
  const [count, setCount] = useState(0);

  return (
    <button  onClick={() => setCount(currCount => currCount + 1)}>{count}</button>
  );
});