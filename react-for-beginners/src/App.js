import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    console.log("I run when keywords changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when counter changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword and counter change.");
  }, [keyword, counter]);

  return (
    <div>
      <h1>Welcome!</h1>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h2>{counter}</h2>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
