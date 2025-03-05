"use client"

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
// import Image from "next/image";
import { Download } from "lucide-react";


export default function About (){
      const { theme } = useTheme();
      const [mounted, setMounted] = useState(false);
    
        useEffect(() => {
          setMounted(true);
        }, []);
        if (!mounted) return null;


    return(
        <section className={`flex flex-col items-center justify-evenly px-6 md:px-10 transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}>
             <h1 className="text-4xl font-bold">About Me</h1>
             <span className="text-xl font-semibold text-gray-700 dark:text-gray-500 mt-2">My Introduction</span>
             <div className="lg:grid lg:grid-cols-2 mt-5 items-center justify-evenly flex flex-col">
             {/* <Image src={Profile.src} alt="Profile Picture" width={200} height={200} className="absolute z-10 rounded-full" /> */}
             <div className="bg-blue-500 size-50 p-6 text-white"></div>
                <div className="flex flex-col items-center justify-evenly">
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-center">Software Engineering Web development  and design ,with Ui / Ux design of user
                friendly modern style</p>
                <div className="grid grid-cols-3  gap-4 justify-center w-fit mt-3">
                    <div className="flex flex-col items-center justify-evenly">
                        <span className="font-semibold">02+</span>
                        <span className="text-xs">Years</span>
                        <span className="text-xs">experience </span>
                    </div>

                    <div className="flex flex-col items-center justify-evenly">
                        <span className="font-semibold">10+</span>
                        <span className="text-xs">Completed</span>
                        <span className="text-xs">projects</span>
                    </div>

                    <div className="flex flex-col items-center justify-evenly">
                        <span className="font-semibold">02+</span>
                         <span className="text-xs">Companies</span>
                         <span className="text-xs">worked </span>
                    </div>
                </div>
                <a
                    href="mailto:sanjayasenanayaka11@gmail.com"
                    className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 flex items-center space-x-2 transition-transform duration-300 group"
                    >
                    <span>Download CV</span>
                    <Download  className="transform transition-transform duration-300 group-hover:translate-y-1" />
                    </a>
                </div>
             </div>
        </section>
    )
}