import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);

  console.log("call an api");

  return (
    <div>
      <h1>Welcome!</h1>
      <h2>{counter}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
