import { GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";

type Props = {
  params: {
    slag: string;
  };
  searchParams: Object;
};

const DetailPage = ({ params }: Props) => {
  return (
    <div>
      <h2>{params.slag}</h2>
    </div>
  );
};

export default DetailPage;
