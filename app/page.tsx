"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { MoonIcon, SunIcon, Loader } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const setThemeHandler = () => {
    console.log("the theme", theme);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <main className="flex flex-col min-h-screen items-center px-8 bg-amber-50 dark:bg-indigo-950">
      <div className="flex container max-w-screen-xl justify-end mt-4">
        <button
          onClick={setThemeHandler}
          className="h-10 w-10 flex border rounded-md justify-center items-center border-input hover:bg-slate-200 hover:bg-opacity-30"
        >
          {hasMounted && theme === "light" && <SunIcon className="h-4 w-4" />}
          {hasMounted && theme === "dark" && <MoonIcon className="h-4 w-4" />}
          {!hasMounted && <Loader className="animate-spin h-4 w-4" />}
        </button>
      </div>
      <div className="flex flex-col container max-w-screen-xl py-14">
        <div className="flex flex-row">
          <div className="flex basis-1/3 justify-center">
            <div className="flex w-72 h-72 relative">
              <Image
                className="rounded-full w-full h-full border-solid border-4 border-pink-700 dark:border-pink-400"
                layout="fill"
                objectFit="cover"
                src={"/profile.jpg"}
                alt={"photo of me!"}
              />
            </div>
          </div>
          <div className="basis-2/3 flex flex-col px-8 justify-start items-start">
            <h1 className="font-sans text-7xl pb-10 dark:text-white">
              Hi, I&apos;m Stavros!
            </h1>
            <h1 className="font-sans text-3xl dark:text-white max-w-[40rem]">
              I&apos;m a{" "}
              <span className="hover:animate-pulse text-pink-700 dark:text-pink-400">
                Front-End developer | UX Designer
              </span>{" "}
              working remotely from Thessaloniki, Greece.
            </h1>
          </div>
        </div>
        <div className="py-8">
          <h2 className="font-sans text-2xl dark:text-white">About me</h2>
          <p className="text-xl text-slate-500 dark:text-slate-400">
            I&apos;m a passionate Front-End developer with a keen eye for UX
            design. I specialize in creating visually stunning and highly
            functional web interfaces that offer an exceptional user experience.
            Operating remotely from the beautiful city of Thessaloniki, Greece,
            I bring a unique blend of creativity and technical expertise to
            every project, ensuring that your digital presence not only looks
            great but also performs flawlessly.
          </p>
        </div>
      </div>
    </main>
  );
}
