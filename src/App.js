import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Main from "./components/Main";
import initialData from "./initial-data.json";
function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(initialData.todo);
  const [action, setAction] = useState("all");
  console.log(todoList);

  console.log(input);
  return (
    <div className="App">
      <section className="todoapp">
        <Header
          input={input}
          setInput={setInput}
          setTodoList={setTodoList}
          todoList={todoList}
        />
        <Main
          input={input}
          todoList={todoList}
          setTodoList={setTodoList}
          action={action}
        />
        <Footer
          setAction={setAction}
          action={action}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </section>
      <Info />
    </div>
  );
}

export default App;
