import React, { useState, useEffect } from "react";
import ArticleCard from "./articleCard";
import Timeout from "await-timeout";
import axios from "axios";

export default function ArticleList() {
  const [articles, set_articles] = useState();

  function clearNotifications() {
    set_articles([]);
  }

  useEffect(() => {
    async function doSomeDataFetching() {
      await Timeout.set(2000);
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );

      set_articles(res.data);
    }
    doSomeDataFetching();
  }, []);

  let display = !articles ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <button onClick={clearNotifications}> Clear all </button>
      <p>Here's a lovely list of articles, for your reading pleasure:</p>
      {articles.map(({ id, title, body }) => {
        return <ArticleCard key={id} title={title} content={body} />;
      })}
    </div>
  );

  return display;
}
