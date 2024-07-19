import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !deadline || !category) return;
    const newTask = {
      name: task,
      category: category.toUpperCase(),  // カテゴリを大文字に変換
      status: 'タスク未完了',
      due_date: deadline // Ensure this is in 'YYYY-MM-DD' format
    };
    console.log(newTask);  // 送信前にデータをコンソールに表示して確認
    addTodo(newTask);
    setTask('');
    setDeadline('');
    setCategory('');
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
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
