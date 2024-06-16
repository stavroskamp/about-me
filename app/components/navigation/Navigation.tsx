"use client";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [, setIsActive] = useState("#about-me");

  useEffect(() => {
    setIsActive(window.location.hash || "#about-me");
  }, []);

  const links = [
    { name: "About me", link: "about-me" },
    { name: "Skills", link: "skills" },
    { name: "Contact", link: "contact" },
  ];

  const baseNavStyles =
    "rounded-3xl lg:mx-2 my-2 px-2 py-1 flex basis-1/3 items-center justify-center whitespace-nowrap hover:underline underline-offset-4 hover:dark:decoration-pink-400";

  return (
    <header className="flex sticky top-0 z-50 justify-center bg-transparent">
      <div className="flex max-w-screen-xl justify-center flex-row rounded-3xl backdrop-blur-md bg-white/30 px-6 mt-6">
        {links.map((item) => (
          <a
            className={`${baseNavStyles}`}
            key={item.link}
            href={`#${item.link}`}
            onClick={() => setIsActive(`#${item.link}`)}
          >
            {item.name}
          </a>
        ))}
        <span className="flex items-center justify-center mx-1">|</span>
        <a
          className={`${baseNavStyles}`}
          href="/Stavros Kampanakis - Senior Front end Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Get my CV
        </a>
      </div>
    </header>
  );
}
