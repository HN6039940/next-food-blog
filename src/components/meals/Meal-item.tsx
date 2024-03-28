import React from "react";
import Image from "next/image";
import Link from "next/link";

export type MealItemProps = {
  id: number;
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
};

const MealItem = ({ image, title, creator, summary, slug }: MealItemProps) => {
  return (
    <article>
      <header>
        <Image src={image} alt="food" fill />
        <div>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div>
        <p>{summary}</p>
        <p>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </p>
      </div>
    </article>
  );
};

export default MealItem;
