import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const substract = () => setCount(count - 1);
  const reset = () => setCount(0);
  const add = () => setCount(count + 1);

  return (
    <>
      <h2>Mi contador {count}</h2>
      <button onClick={substract}>Restar</button>
      <button onClick={reset}>Reset</button>
      <button onClick={add}>Sumar</button>
    </>
  );
}
