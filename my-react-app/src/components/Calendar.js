import React from 'react';
import './Calendar.css';

const Calendar = ({ todos }) => {
  const getDayClass = (date) => {
    const completedTasks = todos.filter(todo => todo.completed && new Date(todo.deadline).toDateString() === date.toDateString()).length;
    if (completedTasks >= 10) {
      return 'dark-blue';
    } else if (completedTasks >= 5) {
      return 'blue';
    } else if (completedTasks >= 1) {
      return 'light-blue';
    }
    return '';
  };

  const renderDays = () => {
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const days = [];
    
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), i);
      days.push(
        <div
          key={i}
          className={`day ${getDayClass(date)}`}
          title={todos.filter(todo => new Date(todo.deadline).toDateString() === date.toDateString()).map(todo => todo.task).join('\n')}
        >
          {i}
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
