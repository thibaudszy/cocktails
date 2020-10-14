import React, { useState, useEffect } from "react";
import ArticleCard from "./articleCard";
import Timeout from "await-timeout";
import axios from "axios";
import RedButton from "./RedButton";

export default function ArticleList() {
  const [cocktail, set_cocktail] = useState();
  const [fetchNew, set_fetchNew] = useState(false);

  useEffect(() => {
    async function doSomeDataFetching() {
      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      console.log("res", res.data.drinks);
      set_cocktail(res.data.drinks);
    }

    doSomeDataFetching();
    console.log("My cocktail", cocktail);
  }, [fetchNew]);

  let display = !cocktail ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <p>Here's a lovely cocktail for you:</p>
      {cocktail.map(({ idDrink, strDrink, strInstructions }) => {
        return (
          <div>
            <RedButton />
            <ArticleCard
              key={idDrink}
              title={strDrink}
              content={strInstructions}
            />
          </div>
        );
      })}
    </div>
  );

  return display;
}
