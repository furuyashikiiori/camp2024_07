import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import MyComponent from "./components/MyComponent";
import "./App.css";
import Counter from "./components/Counter";
import Home from "./components/Home";
import TodoApp from "./TodoApp";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <MyComponent />
        </header>

        {/* <Link>タグで画面遷移のリンクを作成 */}
        <Link to="/home">Home</Link>
        <br />
        <Link to="/counter">Counter</Link>
        <br />
        <Link to="/">MyComponent</Link>
        <br />
        <Link to="/todo">Todo</Link>

        {/* <Route>タグでパスに応じたコンポーネントを表示 */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
