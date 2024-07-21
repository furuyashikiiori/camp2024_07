import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>UniTASK Achievements</h1>
      <nav>
        <ul>
          {/* <Link>タグで画面遷移のリンクを作成 */}
          <li>
            <Link to="/todo">Todo</Link>
          </li>
          <li>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/growup">GrowUP</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
