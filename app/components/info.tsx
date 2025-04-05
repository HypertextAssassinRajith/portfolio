"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Profile from "@/app/assets/images/blob.png";
import { Github, Linkedin, SendHorizontal, Slack } from "lucide-react";
import Image from "next/image";

export default function Info() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <section
      className={`flex flex-col-reverse pt-23  lg:flex-row items-center justify-evenly min-h-screen px-6 md:px-10 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex justify-evenly w-full">
      <div className="h-56 grid-cols-1 content-evenly hidden lg:grid">
          <a href="https://linkedin.com/in/sanjaya-senanayaka-976a32193" target="_blank" className="">
            <Linkedin />
          </a>
          <a href="https://www.reddit.com/user/Rajith11" target="_blank" className="">
            <Slack />
          </a>
          <a href="https://github.com/Hypertext-Assassin-RSS" target="_blank" className="">
          <Github />
          </a>
        </div>

        <div className="flex flex-col items-start lg:items-start lg:w-1/2 text-start lg:text-left">
        <h1 className="text-4xl font-bold">{"Hi, I'm Rajith Sanjaya"}</h1>
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-500 mt-2">
          Full Stack Developer
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Experience in web design and producing quality works
        </p>
        <a
          href="mailto:sanjayasenanayaka11@gmail.com"
          className="mt-4 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 flex items-center space-x-2 transition-transform duration-300 group"
        >
          <span>Contact Me</span>
          <SendHorizontal className="transform transition-transform duration-300 group-hover:translate-x-2" />
        </a>
      </div>
      </div>
      <div className="flex content-center w-full">
      <div className="grid h-56 grid-cols-1 content-evenly lg:hidden">
          <a href="https://linkedin.com/in/sanjaya-senanayaka-976a32193" target="_blank" className="">
            <Linkedin />
          </a>
          
          <a href="https://www.reddit.com/user/Rajith11" target="_blank" className="">
            <Slack />
          </a>
          <a href="https://github.com/Hypertext-Assassin-RSS" target="_blank" className="">
          <Github />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:mt-0">
        <div className="lg:w-1/2 flex justify-center relative ">
          <div className="w-96 md:w-80  sm:w-64 relative flex items-center justify-center ">
            <Image
              src={Profile.src}
              alt="Profile Picture"
              width={500}
              height={500}
              className="absolute z-10 rounded-full"
            />
          </div>
        </div>
      </div>
      </div>
      
    </section>
  );
}