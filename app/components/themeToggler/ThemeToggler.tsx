"use client";
import { SunIcon, MoonIcon, Loader } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
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
    <button
      onClick={setThemeHandler}
      className="h-10 w-10 flex border rounded-md justify-center items-center border-input hover:bg-slate-200 hover:bg-opacity-30"
    >
      {hasMounted && theme === "light" && <SunIcon className="h-4 w-4" />}
      {hasMounted && theme === "dark" && <MoonIcon className="h-4 w-4" />}
      {!hasMounted && <Loader className="animate-spin h-4 w-4" />}
    </button>
  );
}
