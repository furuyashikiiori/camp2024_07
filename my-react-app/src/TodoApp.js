import React, { useState, useEffect } from 'react';
// import {} from 'react-router-dom';
import axios from 'axios';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import CategoryFilter from './components/CategoryFilter';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Calendar from './components/Calendar';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [category, setCategory] = useState('All');

  // ToDoのデータを取得
  useEffect(() => {
    axios.get('http://localhost:8000/todos')
      .then(response => {
        setTodos(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  // ToDoの追加
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

  // ToDoの完了状態のトグル
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

  // ToDoの削除
  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8000/todos/${id}`)
      .then(response => {
        setTodos(todos.filter(todo => todo.id !== id));
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  // ToDoの編集
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
          {/* <Route path="/calendar" element={<Calendar todos={todos} />} /> */}
      </div>
  );
};

export default TodoApp;
