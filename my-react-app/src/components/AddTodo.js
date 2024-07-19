import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !deadline || !category) return;
    const newTask = {
      id: Date.now(),
      task,
      deadline,
      category,
      completed: false,
    };
    addTodo(newTask);
    setTask("");
    setDeadline("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-todo-form">
      <input
        type="text"
        placeholder="Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Others">Others</option>
      </select>

      {/* <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      /> */}
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
