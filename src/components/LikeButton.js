import React, { useState } from "react"; // <- note the added import of useState

export default function LikeButton() {
  const [liked, set_liked] = useState(false); // <- using state!

  //console.log("what are these?", numLikes, set_numLikes);
  const likeThis = () => {
    set_liked(!liked);
  };
  const message = liked ? "You've liked this. Click to unlike" : "Like this";
  return <button onClick={likeThis}>{message}</button>;
}
