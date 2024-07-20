import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import CategoryFilter from './components/CategoryFilter';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState('All');

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
    axios.post('http://localhost:8000/todos', {
      name: task.name,
      category: task.category,
      status: task.status,
      due_date: task.due_date
    })
    .then(response => {
      setTodos([...todos, response.data]);
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  const toggleComplete = (id) => {
    const todoToToggle = todos.find(todo => todo.id === id);
    const updatedTask = {
      ...todoToToggle,
      status: todoToToggle.status === 'タスク完了' ? 'タスク未完了' : 'タスク完了',
    };

    axios.put(`http://localhost:8000/todos/${id}`, updatedTask)
      .then(response => {
        setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`)
      .then(response => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const editTodo = (id, updatedTask) => {
    axios.put(`http://localhost:8000/todos/${id}`, updatedTask)
      .then(response => {
        setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  const filteredTodos = category === 'All' ? todos : todos.filter(todo => todo.category === category);

  return (
      <div className="app">
        <CategoryFilter setCategory={setCategory} />
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
         />
      </div>
  );
};

export default TodoApp;
