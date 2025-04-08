"use client"


import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { UilWindowGrid, UilServer , UilCloudDatabaseTree } from '@iconscout/react-unicons';
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Skill() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [expandedSections, setExpandedSections] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleExpand = (index: number) => {
    setExpandedSections(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const sections = [
    { title: "Frontend Developer", experience: "More than 2 Years" },
    { title: "Backend Developer", experience: "More than 3 Years" },
    { title: "DevOps Developer", experience: "More than 5 Years" }
  ];

  return (
    <section
      className={`flex flex-col items-center justify-evenly px-6 md:px-10 transition-colors duration-300 pt-20 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`} id="skills">
      <h1 className="text-4xl font-bold">Skills</h1>
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-500 mt-2">
        My Skills
      </span>
      <div className="flex flex-col m-5 w-4/4 lg:w-1/5">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="flex justify-evenly items-center p-5 cursor-pointer" onClick={() => toggleExpand(index)}>
              {section.title === "Frontend Developer" && <UilWindowGrid size={50} color="#8200DB" />}
              {section.title === "Backend Developer" && <UilServer size={50} color="#8200DB" />}
              {section.title === "DevOps Developer" && <UilCloudDatabaseTree size={50} color="#8200DB" />}
              <div>
                <h1 className="text-lg">{section.title}</h1>
                <span className="text-sm">{section.experience}</span>
              </div>
              <ChevronDown
                className={`transform transition-transform duration-500 ${
                  expandedSections[index] ? "rotate-180" : ""
                }`}
              />
            </div>
            {expandedSections[index] && (
              <div className="flex justify-center items-center p-5">
                {section.title === "Frontend Developer" && (
                  <div className="flex justify-evenly w-full">
                    <Image src="https://www.svgrepo.com/show/452092/react.svg" alt="React Icon" width={50} height={50} className="w-10 h-10" />
                    <Image src="https://www.svgrepo.com/show/452156/angular.svg" alt="React Icon" width={50} height={50} className="w-10 h-10" />
                    <Image src="https://www.svgrepo.com/show/378440/nextjs-fill.svg" alt="React Icon" width={50} height={50} className="w-10 h-10" />
                  </div>
                )}
                {section.title === "Backend Developer" && (
                  <div className="flex justify-evenly w-full">
                    <Image src="https://www.svgrepo.com/show/373872/nestjs.svg" alt="NestJS Icon" width={50} height={50} className="w-10 h-10" />
                    <Image src="https://www.svgrepo.com/show/330398/express.svg" alt="NestJS Icon" width={50} height={50} className="w-10 h-10" />
                    <Image src="https://www.svgrepo.com/show/354380/spring-icon.svg" alt="Spring Icon" width={50} height={50} className="w-10 h-10" />
                  </div>
                )}
                {section.title === "DevOps Developer" && (
                  <div className="flex justify-evenly w-full">
                  <Image src="https://www.svgrepo.com/show/452192/docker.svg" alt="NestJS Icon" width={50} height={50} className="w-10 h-10" />
                  <Image src="https://www.svgrepo.com/show/452210/git.svg" alt="NestJS Icon" width={50} height={50} className="w-10 h-10" />
                </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}