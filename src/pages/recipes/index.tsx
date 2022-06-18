import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { Recipe } from "types";
import { Card } from "components/card";

const Recipes = () => {
  const [allDrinks, setAllDrinks] = useState<Recipe[]>([]);

  const { pageNumber } = useParams();

  useEffect(() => {
    const getDrinks = async () => {
      const { data } = await fetch(
        `http://localhost:3000/api/recipes/${pageNumber ?? 1}`
      ).then((res) => res.json());

      setAllDrinks(data);
    };

    if (allDrinks.length === 0) {
      getDrinks();
    }
  }, [allDrinks, pageNumber]);

  console.log(`pageNumber: ${pageNumber} `);

  return (
    // <div className="space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm dark:bg-gray-900 dark:text-white">
    //   <p className="block text-radial">
    //     👷🏻‍♂️ Please show <strong>all the recipes</strong> here, paged by 10.
    //   </p>
    //   <p className="block">
    //     <span>You can use the api endpoint </span>
    //     <code className="text-sm font-light">/api/recipes/all</code>.
    //   </p>
    // </div>
    <div>
      {allDrinks.length > 0 &&
        allDrinks.map((drink) => <Card recipe={drink} key={nanoid()} />)}
    </div>
  );
};

export default Recipes;
