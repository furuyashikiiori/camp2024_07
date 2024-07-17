import React from 'react';
import './Calendar.css';

const Calendar = ({ todos }) => {
  if (!todos) {
    return <div>Loading...</div>;
  }
  const getDayClass = (date) => {
    const dayTodos = todos.filter(todo => new Date(todo.deadline).toDateString() === date.toDateString());
    const completedCount = dayTodos.filter(todo => todo.completed).length;
    if (completedCount >= 10) {
      return 'dark-blue';
    } else if (completedCount >= 5) {
      return 'blue';
    } else if (completedCount >= 1) {
      return 'light-blue';
    }
    return '';
  };

  const renderDays = () => {
    const days = [];
    const today = new Date();

    for (let i = 0; i < 31; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i + 1);
      days.push(
        <div key={i} className={`day ${getDayClass(date)}`}>
          {i + 1}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="calendar">
      {renderDays()}
    </div>
  );
};

export default Calendar;
