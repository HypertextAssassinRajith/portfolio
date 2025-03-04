"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Profile from "@/app/assets/perfil.png"

export default function Info() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <section
      className={`flex flex-row md:flex-row items-center justify-center min-h-screen px-10 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex flex-col items-start md:w-1/2">
        <div className="flex flex-col space-y-4 mb-6">
          <a
            href="https://linkedin.com/in/sanjaya-senanayaka-976a32193"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 text-2xl"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="https://www.reddit.com/user/Rajith11"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 text-2xl"
          >
            <i className="uil uil-reddit-alien-alt"></i>
          </a>
          <a
            href="https://github.com/Hypertext-Assassin-RSS"
            target="_blank"
            rel="noreferrer"
            className="text-purple-600 text-2xl"
          >
            <i className="uil uil-github"></i>
          </a>
        </div>
        <h1 className="text-4xl font-bold">Hi, I'm Rajith Sanjaya</h1>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
          Full Stack Developer
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Experience in web design and producing quality works
        </p>
        <a
          href="mailto:sanjayasenanayaka11@gmail.com"
          className="mt-4 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 flex items-center gap-2"
        >
          Contact Me <i className="uil uil-envelope-upload"></i>
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
            <div className="w-64 h-64 md:w-80 md:h-80 relative flex items-center justify-center">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="">
                <path
                fill="#6E57E0"
                d="M62.2,-39.8C71.1,-20.4,62.3,5.2,49,23.4C35.7,41.6,17.8,52.2,-0.8,52.7C-19.4,53.2,-38.8,43.4,-51.3,25.7C-63.7,8.1,-69.1,-17.5,-59.4,-37.3C-49.7,-57.2,-24.8,-71.3,0.9,-71.8C26.6,-72.3,53.2,-59.2,62.2,-39.8Z"
                transform="translate(100 100)"
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <Image
                src={Profile}
                alt="Rajith Sanjaya"
                width={200}
                height={200}
                className="rounded-full"
                />
            </div>
            </div>
        </div>
    </div>
    </section>
  );
}
