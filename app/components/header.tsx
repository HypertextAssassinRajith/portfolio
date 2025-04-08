"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

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
    <header className={`fixed top-0 flex flex-row w-full z-100 justify-between md:justify-evenly lg:justify-evenly items-center px-6 md:px-10 py-4 shadow-sm
    ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}
    `}>
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
      <div
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className={`w-13 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        } mr-2`}
      >
        <div
          className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out bg-white flex items-center justify-center ${
            theme === "dark" ? "translate-x-5" : ""
          }`}
        >
          {theme === "dark" ? (
            <Moon size={15} className="text-black" />
          ) : (
            <Sun size={15} className="text-black" />
          )}
        </div>
      </div>

      <button
        onClick={() => setIsMenuOpen((prev) => !prev)}
        className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {isMenuOpen ? (
          <X size={20} className={theme === "light" ? "text-white" : "text-white"} />
        ) : (
          <Menu size={20} className={theme === "light" ? "text-white" : "text-white"} />
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