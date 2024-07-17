import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Home from "./components/Home";
import TodoApp from "./TodoApp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        {/* <Route>タグでパスに応じたコンポーネントを表示 */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<TodoApp />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/" element={<MyComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
