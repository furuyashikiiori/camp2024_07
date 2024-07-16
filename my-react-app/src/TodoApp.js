import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import CategoryFilter from './components/CategoryFilter';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Calendar from './components/Calendar';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState('All');

  //ToDoのデータを取得
  useEffect(() => {
    axios.get('http://localhost:8000/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
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

  const filteredTodos = category === 'All' ? todos : todos.filter((todo) => todo.category === category);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              {/* <h1>Todo List</h1> */}
              <CategoryFilter setCategory={setCategory} />
              <AddTodo addTodo={addTodo} />
              <TodoList
                todos={filteredTodos}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
              </>
            }
          />
          {<Route path="/calendar" element={<Calendar todos={todos} />} />}
        </Routes>
      </div>
    </Router>
  );
};

export default TodoApp;
