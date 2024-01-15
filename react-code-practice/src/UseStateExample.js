import { useState } from "react";

function UseStateExample() {
  const [count, setCount] = useState(0);

  const onUpClick = () => {
    setCount((curr) => curr + 1);
  };

  const onDownClick = () => {
    setCount((curr) => curr - 1);
  };

  return (
    <div>
      <h1>useState Example</h1>
      <h3>count : {count}</h3>
      <button onClick={onUpClick}>up</button>
      <button onClick={onDownClick}>down</button>
    </div>
  );
}

export default UseStateExample;
