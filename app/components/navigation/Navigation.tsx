"use client";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [isActive, setIsActive] = useState("#about-me");

  useEffect(() => {
    setIsActive(window.location.hash || "#about-me");
  }, []);

  const links = [
    { name: "About me", link: "about-me" },
    { name: "Skills", link: "skills" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <header className="flex sticky top-0 z-50 justify-center bg-transparent">
      <div className="flex max-w-screen-xl  justify-center flex-row rounded-3xl backdrop-blur-md bg-white/30 px-6 mt-6">
        {links.map((item) => (
          <a
            className={`${
              isActive === `#${item.link}`
                ? "bg-slate-200/30 hover:border-transparent"
                : ""
            } rounded-3xl mx-2 my-2 px-2 py-1 flex basis-1/3 items-center justify-center ease-in-out duration-300 whitespace-nowrap border-2 border-transparent hover:border-2 hover:border-white hover:border-opacity-30`}
            key={item.link}
            href={`#${item.link}`}
            onClick={() => setIsActive(`#${item.link}`)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
}
