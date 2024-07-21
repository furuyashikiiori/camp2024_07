import React, { useState } from "react";
import "./Calendar.css";

const Calendar = ({ todos }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

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
    const firstDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    ).getDate(); // 今月の最後の日

    // 週の始まりまで空白の日付を追加
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );
      days.push(
        <div key={i} className={`day ${getDayClass(date)}`}>
          {i}
        </div>
      );
    }

    return days;
  };

  // 前月に移動
  const goToPreviousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  // 次月に移動
  const goToNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  return (
    <div>
      <div className="calendar-controls">
        <button onClick={goToPreviousMonth} className="nav-button-back">
          ◀︎ Previous
        </button>
        <h2 className="month-year">
          {currentMonth.toLocaleString("default", { month: "long" })}{" "}
          {currentMonth.getFullYear()}
        </h2>
        <button onClick={goToNextMonth} className="nav-button-next">
          Next ▶︎
        </button>
      </div>
      <div className="calendar">{renderDays()}</div>
      <div className="calendar-legend">
        <p className="calendar-less">Less</p>
        <div className="rectangle1"></div>
        <div className="rectangle2"></div>
        <div className="rectangle3"></div>
        <p className="calendar-more">More</p>
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
