"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
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
    <main className="flex flex-col min-h-screen">
      <div className="flex container max-w-screen-lg justify-end mt-4">
        <Button onClick={setThemeHandler} variant="outline" size="icon">
          {hasMounted && theme === "light" && <SunIcon className="h-4 w-4" />}
          {hasMounted && theme === "dark" && <MoonIcon className="h-4 w-4" />}
          {!hasMounted && <Loader className="animate-spin h-4 w-4" />}
        </Button>
      </div>
      <div className="flex flex-col container max-w-screen-lg py-14">
        <div className="flex">
          <div className="flex h-52 w-52 relative">
            <Image
              className="rounded-full h-full w-full"
              layout="fill"
              objectFit="cover"
              src={"/profile.jpg"}
              alt={"photo of me!"}
            />
          </div>
          <div className="flex flex-col px-8 justify-center items-center">
            <h1 className="font-sans text-3xl dark:text-white">
              Stavros Kampanakis
            </h1>
            <h3 className="font-sans text-xl text-slate-400 dark:text-white">
              Front-End developer | UX Designer
            </h3>
          </div>
        </div>
        <div className="py-8">
          <h2 className="font-sans text-2xl dark:text-white">About me</h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Hello! I’m Stavros, a passionate Front-End developer with a keen eye
            for UX design. I specialize in creating visually stunning and highly
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
