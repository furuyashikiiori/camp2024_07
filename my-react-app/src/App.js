import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Counter from "./components/Counter";
import Home from "./components/Home";
import TodoApp from "./TodoApp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import MyComponent from "./components/MyComponent";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTask) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTask : todo)));
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        {/* <Route>タグでパスに応じたコンポーネントを表示 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route
            path="/todo"
            element={
              <TodoApp
                todos={todos}
                setTodos={setTodos}
                addTodo={addTodo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            }
          />
          <Route path="/calendar" element={<Calendar todos={todos} />} />
          <Route path="/mycomponent" element={<MyComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
