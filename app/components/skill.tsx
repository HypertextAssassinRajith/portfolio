"use client"

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";


export default function Skill(){
      const { theme } = useTheme();
      const [mounted, setMounted] = useState(false);
    
      useEffect(() => {
        setMounted(true);
      }, []);
      if (!mounted) return null;

    return(
        <section className={`flex flex-col items-center justify-evenly  px-6 md:px-10 transition-colors duration-300 pt-20 ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}>
            <h1 className="text-4xl font-bold">Skills</h1>
            <span className="text-xl font-semibold text-gray-700 dark:text-gray-500 mt-2">My Skills</span>
            <div className="flex flex-col">
              
            </div>
        </section>
    );

}