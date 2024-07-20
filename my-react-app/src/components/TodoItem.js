import React, { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    editTodo(todo.id, { ...todo, task: newTask });
    setIsEditing(false);
  };

  return (
    <div
      className={`todo-item ${
        todo.status === "タスク完了" ? "completed" : "incomplete"
      }`}
    >
      <input
        type="checkbox"
        checked={todo.status === "タスク完了"}
        onChange={() => toggleComplete(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      ) : (
        <span>{todo.name}</span>
      )}
      <span>{todo.due_date}</span>
      <span>{todo.category}</span>
      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
