import { Card } from "components/card";

const Homepage = () => {
  return (
    <main>
      <div className="mb-4 space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm dark:bg-gray-900 dark:text-white">
        <p className="block text-radial">
          👷🏻‍♂️ Please show the <strong>most popular recipes</strong> here.
        </p>
        <p className="block">
          <span>You can use the api endpoint </span>
          <code className="text-sm font-light">/api/recipes/popular</code>.
        </p>
      </div>
      <div>
        <Card />
      </div>
    </main>
  );
};

export default Homepage;
