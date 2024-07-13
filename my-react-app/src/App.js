import React from "react";
import MyComponent from "./components/MyComponent";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent />
        <Counter />
      </header>
    </div>
  );
}

export default App;
