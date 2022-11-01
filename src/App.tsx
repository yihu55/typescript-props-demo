import React, { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todoText, setTodoText] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => {
    setTodoText("");
    setTodos([...todos, todoText]);
  };
  return (
    <div className='App'>
      <header className='App-header'>My ToDo Lists</header>

      <main>
        <TodoList todos={todos} />
      </main>
      <footer className='App-footer'>
        <Input
          todoText={todoText}
          onTextChanged={setTodoText}
          onSubmit={addTodo}
        />
      </footer>
    </div>
  );
}

export default App;
