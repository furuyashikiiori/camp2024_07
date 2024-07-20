import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState("");

  // 選択肢のリストを定義
  const categories = [
    { value: "Work", label: "Work" },
    { value: "Personal", label: "Personal" },
    { value: "Shopping", label: "Shopping" },
    { value: "Others", label: "Others" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !deadline || !category) return;
    const newTask = {
      name: task,
      category: category, // カテゴリをそのまま設定
      status: "タスク未完了", // ステータスをそのまま設定
      due_date: deadline, // Ensure this is in 'YYYY-MM-DD' format
    };
    console.log(newTask); // 送信前にデータをコンソールに表示して確認
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
        <option value="">Select Category</option> {/* デフォルトの空の選択肢 */}
        {categories.map((cat) => (
          <option key={cat.value} value={cat.value}>
            {cat.label}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
