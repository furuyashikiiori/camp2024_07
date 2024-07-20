import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  const incompleteTodos = todos.filter(
    (todo) => todo.status === "タスク未完了"
  );
  const completeTodos = todos.filter((todo) => todo.status === "タスク完了");

  return (
    <div className="todo-list">
      <h2>Incomplete Tasks</h2>
      {incompleteTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
      <h2>Complete Tasks</h2>
      {completeTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
