"use client"

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { UilWindowGrid } from '@iconscout/react-unicons'
import { ChevronDown } from "lucide-react";


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
            <div className="flex flex-col m-5 w-2/3 lg:w-1/5">
              <div className="flex justify-evenly items-center p-5">
                <UilWindowGrid size = {50} color="#8200DB" />
                <div>
                  <h1 className="text-lg">Frontend Developer</h1>
                  <span className="text-sm">More than 2 Years</span>
                </div>
                <ChevronDown />
              </div>
              <div className="flex justify-evenly items-center p-5">
                <UilWindowGrid size = {50} color="#8200DB" />
                <div>
                  <h1 className="text-lg">Frontend Developer</h1>
                  <span className="text-sm">More than 2 Years</span>
                </div>
                <ChevronDown />
              </div>
              <div className="flex justify-evenly items-center p-5">
                <UilWindowGrid size = {50} color="#8200DB" />
                <div>
                  <h1 className="text-lg">Frontend Developer</h1>
                  <span className="text-sm">More than 2 Years</span>
                </div>
                <ChevronDown />
              </div>
            
            </div>
        </section>
    );

}