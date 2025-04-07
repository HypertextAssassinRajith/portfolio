"use client"

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Download } from "lucide-react";
import Image from "next/image";
import Profile from "../../app/assets/images/about.jpg";
import PocketBase, { RecordModel } from "pocketbase";

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_API_URL);

export default function About () {
  const [item, setItem] = useState<RecordModel>();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await pb.collection('CV').getFullList();
        if(records && records.length > 0) {
          setItem(records[0]);
          console.log(records[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted || !item) return null;

  console.log(item.collectionId);

  return (
    <section className={`flex flex-col items-center justify-evenly px-6 md:px-10 transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    }`}>
      <h1 className="text-4xl font-bold">About Me</h1>
      <span className="text-lg font-semibold text-gray-700 dark:text-gray-500 mt-2">My Introduction</span>
      <div className="mt-5 items-center justify-evenly flex flex-col">
        <Image src={Profile.src} alt="Profile Picture" width={300} height={200} className="z-10" />
        <div className="flex flex-col items-center justify-evenly">
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-center">
            Software Engineering, Web development and design, with Ui/Ux design of user friendly modern style.
          </p>
          <div className="grid grid-cols-3 gap-4 justify-center w-fit mt-3">
            <div className="flex flex-col items-center justify-evenly">
              <span className="font-semibold">02+</span>
              <span className="text-xs">Years</span>
              <span className="text-xs">experience</span>
            </div>
            <div className="flex flex-col items-center justify-evenly">
              <span className="font-semibold">10+</span>
              <span className="text-xs">Completed</span>
              <span className="text-xs">projects</span>
            </div>
            <div className="flex flex-col items-center justify-evenly">
              <span className="font-semibold">02+</span>
              <span className="text-xs">Companies</span>
              <span className="text-xs">worked</span>
            </div>
          </div>
          <a
            href={`${process.env.NEXT_PUBLIC_POCKETBASE_API_URL}/api/files/${item.collectionId}/${item.id}/${item.file}?token`}
            target="_blank"
            className="mt-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 flex items-center space-x-2 transition-transform duration-300 group"
          >
            <span>Download CV</span>
            <Download className="transform transition-transform duration-300 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}