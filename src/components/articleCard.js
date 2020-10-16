import React from "react";

export default function ArticleCard(props) {
  return (
    <div className="Article">
      <h2>{props.title}</h2>
      <img src={props.image} alt="cocktail" width="500" height="600" />
      <p>{props.content}</p>
    </div>
  );
}
