import React from "react";
import "./Calendar.css";

const Calendar = ({ todos }) => {
  if (!todos) {
    return <div>Loading...</div>;
  }

  // 完了したタスクの数に基づいて日付のクラスを取得
  const getDayClass = (date) => {
    const dayTodos = todos.filter(
      (todo) => new Date(todo.due_date).toDateString() === date.toDateString()
    );
    const completedCount = dayTodos.filter(
      (todo) => todo.status === "タスク完了"
    ).length;
    if (completedCount >= 10) {
      return "dark-blue";
    } else if (completedCount >= 5) {
      return "blue";
    } else if (completedCount >= 1) {
      return "light-blue";
    }
    return "";
  };

  // カレンダーの日付を描画
  const renderDays = () => {
    const days = [];
    const today = new Date();
    const lastDay = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate(); // 今月の最後の日

    for (let i = 1; i <= lastDay; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      days.push(
        <div key={i} className={`day ${getDayClass(date)}`}>
          {i}
        </div>
      );
    }

    return days;
  };

  return (
    <div>
      <div className="calendar">
        {renderDays()}
        <p className="calender-less">Less</p>
        <div class="rectangle1"></div>
        <div class="rectangle2"></div>
        <div class="rectangle3"></div>
        <p className="calender-more">More</p>
      </div>

      <button
        className="Reload_button"
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </div>
  );
};

export default Calendar;
