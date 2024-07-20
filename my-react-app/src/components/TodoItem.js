import React, { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState({ name: todo.name, due_date: todo.due_date, category: todo.category });

  const handleEdit = () => {
    editTodo(todo.id, { ...todo, ...newTask });
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
        <>
          <input
            type="text"
            value={newTask.name}
            onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          />
          <input
            type="date"
            value={new Date(newTask.due_date).toISOString().split('T')[0]}
            onChange={(e) => setNewTask({ ...newTask, due_date: e.target.value })}
          />
          <select
            value={newTask.category}
            onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
          </select>
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo.name}</span>
          <span>{todo.due_date}</span>
          <span>{todo.category}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
