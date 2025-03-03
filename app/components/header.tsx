"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AiFillMoon, AiFillSun, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoMdMoon } from "react-icons/io";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Skills", label: "Skills" },
    { href: "#Services", label: "Services" },
    { href: "#Portfolio", label: "Portfolio" },
    { href: "#Contactme", label: "Contact Me" },
  ];

  return (
    <header className="relative flex flex-row w-full justify-between items-center px-6 md:px-10 py-4 border-b border-gray-300 dark:border-gray-700">
      <a href="#" className="text-lg font-semibold">
        Rajith Sanjaya
      </a>
      <nav className="hidden md:block">
        <ul className="flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-gray-500">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 mr-2"
        >
          {theme === "dark" ? (
            <AiFillSun size={20} />
          ) : (
            <IoMdMoon  size={20} color="white" />
          )}
        </button>
        <button
          onClick={() => setIsMenuOpen(prev => !prev)}
          className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={20} color={theme === "light" ? "white" : undefined} />
          ) : (
            <AiOutlineMenu size={20} color={theme === "light" ? "white" : undefined} />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 md:hidden">
          <ul className="flex flex-col space-y-4 p-4 text-base font-medium text-gray-800 dark:text-gray-100">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block w-full hover:text-gray-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}