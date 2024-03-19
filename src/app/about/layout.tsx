import { PropsWithChildren } from "react";

type Props = PropsWithChildren<"div">;

const layout = (props: Props) => {
  return (
    <section className="container mx-auto flex min-h-dvh flex-col items-center justify-center  bg-gradient-to-r from-slate-700 via-slate-300 to-white px-3 font-bold">
      {props.children}
    </section>
  );
};

export default layout;
