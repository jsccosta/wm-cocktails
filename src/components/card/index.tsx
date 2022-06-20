import { Recipe, Ingredient } from "types";
import { SectionTitle } from "../sectionTitle";
import { RecipeSection } from "../recipeSection";
import { getRandomID, capitalize } from "../../utils/index";

export const Card = ({ recipe }: { recipe: Recipe }) => {
  const { name, glass, category, ingredients, garnish, preparation } = recipe;

  return (
    <div
      data-test-id="drink-card"
      className="mb-2 flex border border-gray-200 bg-white/50 p-4 dark:bg-gray-900 dark:text-white"
    >
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        {category && (
          <span className="mr-1 inline-block rounded bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600 last:mr-0">
            {category}
          </span>
        )}

        {glass && (
          <RecipeSection
            sectionTitle="Glass"
            sectionContent={capitalize(glass)}
          />
        )}

        <SectionTitle sectionTitle="Ingredients" />
        <ul className="list-inside list-disc px-1 text-sm">
          {ingredients.map((ingredientDetails) => {
            // @ts-ignore
            const { unit, amount, ingredient, special }: Ingredient =
              ingredientDetails;
            return (
              <li key={getRandomID()}>
                {amount} {unit} {ingredient}
                {special}
              </li>
            );
          })}
        </ul>

        {garnish && (
          <RecipeSection sectionTitle="Garnish" sectionContent={garnish} />
        )}
        <RecipeSection
          sectionTitle="Preparation"
          sectionContent={preparation}
        />
      </div>
    </div>
  );
};
