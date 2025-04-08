"use client"

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { UilCloudDatabaseTree, UilIllustration, UilWindow } from '@iconscout/react-unicons'

export default function Services() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return null;


    const services = [
      { title: "Frontend Developer", icon: <UilWindow size={50} color="#8200DB" />, link: "#" },
      { title: "Backend Developer", icon: <UilCloudDatabaseTree  size={50} color="#8200DB" />, link: "#" },
      { title: "Creative Designer", icon: <UilIllustration  size={50} color="#8200DB" />, link: "#" },
    ];
  
    return (
      <div className={`flex flex-col items-center justify-evenly px-6 md:px-10 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`} id="services">
        <h2 className="text-4xl font-bold pt-20">Services</h2>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-500 mt-2">You can hire me</p>
  
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3  gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" bg-white shadow-md rounded-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition h-64 w-64">
              <div className="text-purple-600 text-3xl">{service.icon}</div>
              <h3 className="text-lg font-semibold mt-4 text-black">{service.title}</h3>
              <a href={service.link} className="text-purple-600 mt-2 flex items-center hover:text-purple-800 transition-transform decoration-300 group">
                View More <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">»</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  