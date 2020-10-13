import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LikeButton from "./components/LikeButton";
import LikeCounter from "./components/LikeCounter";
import AwesomeAnimals from "./components/AwesomeAnimals";
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
