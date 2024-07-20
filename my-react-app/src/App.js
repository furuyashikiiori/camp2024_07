import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Login from "./components/Login";
import TodoApp from "./TodoApp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import GrowUP from "./components/GrowUP";

const AppContent = () => {
  const [todos, setTodos] = useState([]);
  const location = useLocation();

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


  const isLoginPage = location.pathname === "/";
  // const taskCount = todos.filter(todo => todo.states === "タスク完了").length;
  const taskCount = todos.filter((todo) => todo.status === "タスク完了").length;

  return (
    <div className="App">
      {!isLoginPage && (
        <header className="App-header">
          <Header />
        </header>
      )}

      <Routes>
        <Route path="/" element={<Login />} />
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
        <Route path="/growup" element={<GrowUP />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </div>

  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
