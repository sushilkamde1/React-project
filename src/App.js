import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function Icounter() {
    setCount(count + 1);
  }
  let Dcounter = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(count != 0);
    }
  };
  return (
    <div>
      <h1>Increment Decrement Counter</h1>
      <h1>{count}</h1>

      <button onClick={Icounter}>Increase</button>

      <button onClick={Dcounter}>Decrease</button>
    </div>
  );
}
export default App;
