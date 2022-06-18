import { useEffect, useState } from "react";
import { Card } from "components/card";
import { nanoid } from "nanoid";

import { Recipe } from "types";
// const [links, setLinks] = useState<string>();

const Homepage = () => {
  const [allDrinks, setAllDrinks] = useState<Recipe[]>([]);

  useEffect(() => {
    const getDrinks = async () => {
      const { cocktails } = await fetch(
        "http://localhost:3000/api/recipes/popular"
      ).then((res) => res.json());

      setAllDrinks(cocktails);
    };

    if (allDrinks.length === 0) {
      getDrinks();
    }
  }, [allDrinks]);

  return (
    <main>
      {/* <div className="mb-4 space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm dark:bg-gray-900 dark:text-white">
        
        
      </div> */}
      <div>
        {allDrinks.length > 0 &&
          allDrinks
            .slice(0, 5)
            .map((drink) => <Card recipe={drink} key={nanoid()} />)}
      </div>
    </main>
  );
};

export default Homepage;
