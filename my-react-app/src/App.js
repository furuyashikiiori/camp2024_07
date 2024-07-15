import React from "react";
import MyComponent from "./components/MyComponent";
import "./App.css";
import Counter from "./components/Counter";

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

        {/* <Route>タグでパスに応じたコンポーネントを表示 */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
