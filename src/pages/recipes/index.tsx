const Recipes = () => {
  return (
    <div className="space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm dark:bg-gray-900 dark:text-white">
      <p className="block text-radial">
        👷🏻‍♂️ Please show <strong>all the recipes</strong> here, paged by 10.
      </p>
      <p className="block">
        <span>You can use the api endpoint </span>
        <code className="text-sm font-light">/api/recipes/all</code>.
      </p>
    </div>
  );
};

export default Recipes;
