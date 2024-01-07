import { useState, useEffect } from "react";

function Hello() {
  // function byFn() {
  //   console.log("Destroyed :(");
  // }

  // function hiFn() {
  //   console.log("Created :)");
  //   return byFn;
  // }
  // useEffect(hiFn, []);

  // useEffect(function () {
  //   console.log("Created :)");

  //   return function () {
  //     console.log("Destroyed :(");
  //   };
  // }, []);

  useEffect(() => {
    console.log("Created :)");
    return () => console.log("Destroyed :(");
  }, []);

  return <h1>Hello World</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
