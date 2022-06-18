import { Recipe, Ingredient } from "types";
import { nanoid } from "nanoid";

export const Card = ({ recipe }: { recipe: Recipe }) => {
  const { name, glass, category, ingredients, garnish, preparation } = recipe;

  return (
    <div className="mb-2 flex border border-gray-200 bg-white/50 p-4 dark:bg-gray-900 dark:text-white">
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        {category && (
          <span className="mr-1 inline-block rounded bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600 last:mr-0">
            {category}
          </span>
        )}

        {glass && (
          <>
            <h3 className="text-lg font-bold">Glass</h3>
            <div className="text-sm">{glass}</div>
          </>
        )}

        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {ingredients.map((ingredientDetails) => {
            // @ts-ignore
            const { unit, amount, ingredient, special }: Ingredient =
              ingredientDetails;
            // ToDo: review this logic: not really happy with this
            return (
              <li key={nanoid()}>
                {amount} {unit} {ingredient}
                {special}
              </li>
            );
          })}
        </ul>

        {garnish && (
          <>
            <h3 className="text-lg font-bold">Garnish</h3>
            <div className="text-sm">{garnish}</div>
          </>
        )}

        <h3 className="text-lg font-bold">Preparation</h3>
        <div className="text-sm">{preparation}</div>
      </div>
    </div>
  );
};
