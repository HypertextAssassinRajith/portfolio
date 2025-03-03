"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiFillMoon, AiFillSun } from "react-icons/ai";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch error in Next.js

  return (
    <header className="flex flex-row w-full justify-center mt-3 mb-3">
      <nav className="w-full flex flex-row justify-between">
        <a href="#" className="ml-4">RajithSanjaya</a>
        <div className="nav__menu" id="nav-menu">
          <ul className="flex flex-row justify-evenly w-96">
            <li className="nav__item">
              <a href="#Home" className="nav__link active-link" id="btnHome">Home</a>
            </li>
            <li className="nav__item">
              <a href="#About" className="nav__link" id="btnAbout">About</a>
            </li>
            <li className="nav__item">
              <a href="#Skills" className="nav__link" id="btnSkills">Skills</a>
            </li>
            <li className="nav__item">
              <a href="#Services" className="nav__link" id="btnServices">Services</a>
            </li>
            <li className="nav__item">
              <a href="#Portfolio" className="nav__link" id="btnPortfolio">Portfolio</a>
            </li>
            <li className="nav__item">
              <a href="#Contactme" className="nav__link" id="btnContact">ContactMe</a>
            </li>
          </ul>
        </div>
        <div className="pr-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {theme === "dark" ? <AiFillSun size={20} /> : <AiFillMoon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
