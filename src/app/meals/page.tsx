import React from "react";
import Link from "next/link";
import MealsGrid from "@/components/meals/Meals-grid";

import { getMeals } from "../../../lib/meals";

const MealsPage = async () => {
  const meals = await getMeals();

  return (
    <>
      <header className="container px-20 py-20 text-white">
        <h1 className=" mb-5 text-6xl font-bold">
          Discuss your favorite meals! created
          <span className=" ml-3 inline-block text-orange-500">by you</span>
        </h1>
        <div className=" grid grid-cols-1 place-items-start gap-5">
          <p className="text-4xl font-normal">
            choose from the best meals and share your own with the world.
          </p>
          <p className=" inline-block rounded-md bg-gradient-to-tr from-orange-400 via-orange-600 to-orange-700 px-3 py-2 text-2xl">
            <Link href="/meals/share">Go to the meals share</Link>
          </p>
        </div>
      </header>
      <main className=" container mx-auto px-5">
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
