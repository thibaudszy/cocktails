import React from "react";
import "./App.scss";

import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ArticleList />
      </header>
    </div>
  );
}

export default App;
