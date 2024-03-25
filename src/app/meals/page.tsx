import React from "react";
import Link from "next/link";
const MealsPage = () => {
  return (
    <>
      <header>
        <h1>
          Discuss your favorite meals!
          <span>and share created by you</span>
        </h1>
      </header>
      <p>
        choose from the best meals and share your own with the world. Join our
        vibrant community of food enthusiasts and start sharing your culinary
        creations today!
      </p>
      <p>
        <Link href="/meals/share">Go to the meals share</Link>
      </p>
      <main>
        <p>This is the meals page</p>
      </main>
    </>
  );
};

export default MealsPage;
