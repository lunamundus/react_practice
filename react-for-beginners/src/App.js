import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);

  console.log("i run all the time");

  // const iRunOnlyOnce = () => {
  //   console.log("i run only once");
  // };

  // useEffect(iRunOnlyOnce, []);

  useEffect(() => {
    console.log("CALL THE API...");
  }, []);

  return (
    <div>
      <h1>Welcome!</h1>
      <h2>{counter}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
