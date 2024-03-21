import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className=" container mx-auto p-10">
        <div className=" grid grid-cols-2 place-items-center gap-10">
          <div className=" min-h-72 min-w-72 bg-slate-400"></div>
          <div className=" grid grid-cols-1 gap-10 justify-self-start p-14">
            <div className="  flex flex-col gap-10  text-5xl font-bold tracking-wider text-orange-200">
              <h1>NEXT LEVEL FOOD FOR THE NEXT LEVEL YOU</h1>
              <p className=" text-4xl text-slate-100 ">
                Taste and share the best meals with the world
              </p>
            </div>
            <div className=" flex  gap-5">
              <Link
                href="/meals/share"
                className=" inline-block rounded-md bg-slate-300 px-5 py-3 font-bold capitalize tracking-wide text-orange-700"
              >
                Go to the meals share
              </Link>
              <Link
                href="/community"
                className="  inline-block rounded-md bg-slate-800 px-5 py-3 font-bold capitalize tracking-wide text-slate-300"
              >
                Go to the community
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto grid grid-cols-1 place-items-center text-orange-300">
        <section className="grid max-w-5xl grid-flow-row grid-cols-1 justify-items-center gap-10 px-10 py-24 ">
          <h2 className="text-4xl font-bold tracking-wider">How about it?</h2>
          <p className="text-xl font-bold tracking-wider">
            This is the best place to share your meals with the world. Join our
            vibrant community of food enthusiasts and start sharing your
            culinary creations today!
          </p>
          <p className="text-xl font-bold tracking-wider">
            next level food for the next level you. Taste and share the best
            meals. Taste and share the best meals with the world. Taste and
            share the best!
          </p>
        </section>
        <section className="grid max-w-5xl grid-flow-row grid-cols-1 justify-items-center gap-10 px-10 py-24 ">
          <h2 className="text-4xl font-bold tracking-wider">
            Why Next Level Food?
          </h2>
          <p className="text-xl font-bold tracking-wider">
            This is the best place to share your meals with the world. Join our
            vibrant community of food enthusiasts and start sharing your
            culinary creations today!
          </p>
          <p className="text-xl font-bold tracking-wider">
            next level food for the next level you. Taste and share the best
            meals. Taste and share the best meals with the world. Taste and
            share the best!
          </p>
        </section>
      </main>
    </>
  );
}
