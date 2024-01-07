import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="할 일을 작성해주세요..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
