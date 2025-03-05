"use client"

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";


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
          }`}
        >
             <h1 className="text-4xl font-bold">About Me</h1>
             <span className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-2">My Introduction</span>
             <div className="grid grid-cols-2 mt-5">
             {/* <Image src={Profile.src} alt="Profile Picture" width={200} height={200} className="absolute z-10 rounded-full" /> */}
             <div className="bg-blue-500 size-50 p-6 text-white">
                This is a box with a blue background.
            </div>

                <div className="flex flex-col items-center justify-evenly">
                <p className="text-gray-600 dark:text-gray-400 mt-2">Software Engineering Web development  and design ,with Ui / Ux design of user
                friendly modern style</p>
                <div className="grid grid-cols-1 gap-4 justify-center w-fit">
                    <div>
                        <span className="font-semibold">02+</span>
                        <span className="text-sm">Years  experience </span>
                    </div>

                    <div>
                        <span className="font-semibold">10+</span>
                        <span className="">Completed  projects </span>
                    </div>

                    <div>
                        <span className="font-semibold">02+</span>
                         <span className="">Companies   worked </span>
                    </div>
                </div>
                </div>
             </div>
        </section>
    )
}