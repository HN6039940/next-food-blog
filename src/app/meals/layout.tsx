import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<"div">;

const layout = (props: Props) => {
  return <div>{props.children}</div>;
};

export default layout;
