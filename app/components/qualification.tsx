"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const educationData = [
  { title: "Software Engineer", place: "IJSE", date: "Present" },
  { title: "Sri Sangabodhi Collage Katukenda", place: "G.C.E O/L", date: "2015-2016" },
  { title: "Vidyalankara Central Collage Negambo", place: "2005-2010", date: "2019-2020" },
];

const workData = [
  { title: "Samanala Publishers PVT (LTD)", place: "Associate Software Engineer", date: "Present" },
  { title: "Epic Lanka Technology's", place: "Intern Fullstack Developer", date: "2022-2024" },
  { title: "Software Engineer", place: "Freelancer", date: "2020-2021" },
];

export default function Qualification() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("Education");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const data = activeTab === "Education" ? educationData : workData;

  return (
    <section
      className={`flex flex-col items-center px-6 md:px-10 transition-colors duration-300 pt-20 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-bold">Qualification</h1>
      <span className="text-xl font-semibold text-gray-700 dark:text-gray-500 mt-2">
        My Life Journey
      </span>
      
      <div className="flex gap-4 mt-6">
        <button 
          className={`px-4 py-2 rounded-lg font-semibold ${activeTab === "Education" ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-900"}`}
          onClick={() => setActiveTab("Education")}
        >
          <FaGraduationCap className="inline mr-2" /> Education
        </button>
        <button 
          className={`px-4 py-2 rounded-lg font-semibold ${activeTab === "Work" ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-900"}`}
          onClick={() => setActiveTab("Work")}
        >
          <FaBriefcase className="inline mr-2" /> Work
        </button>
      </div>
      
      <div className="relative mt-8 w-full max-w-lg">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-1 bg-blue-500"></div>
        <div className="flex flex-col items-center">
          {data.map((item, idx) => (
            <motion.div 
              key={idx} 
              className={`relative mb-8 flex w-full ${idx % 2 === 0 ? "justify-start" : "justify-end"}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 1.5 }}
            >
              <div className="relative w-1/2 p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.place}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <FaCalendarAlt className="mr-2" /> {item.date}
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 top-5 h-4 w-4 bg-blue-500 rounded-full border-2 border-white"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
