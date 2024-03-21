import React from "react";
import Link from "next/link";
const MealsPage = () => {
  return (
    <div>
      <h2>meals page</h2>
      <div className="flex flex-col items-center justify-center gap-5 bg-yellow-300">
        <Link href="/meals/iceCream">ICE CREAM</Link>
        <Link href="/meals/hamburger">HAMBURGER</Link>
        <Link href="/meals/sarad">SARAD</Link>
      </div>
    </div>
  );
};

export default MealsPage;
