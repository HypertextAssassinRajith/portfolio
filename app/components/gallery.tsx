'use client'

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import PocketBase from 'pocketbase';

const images = [
  { src: "/path-to-image1.jpg", category: "Events" },
  { src: "/path-to-image2.jpg", category: "Captures" },
  { src: "/path-to-image3.jpg", category: "Travels" },
  { src: "/path-to-image4.jpg", category: "Designs" },
  { src: "/path-to-image5.jpg", category: "Works" },
];

const categories = ["All", "Events", "Captures", "Travels", "Designs", "Works"];

export default function ImageGallery() {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_API_URL);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [images, setImages] = useState<any[]>([]);


  useEffect (() => {
    const fetchData = async () => {
      try {
        const records = await pb.collection('Galary').getFullList();
        setImages(records)
        console.log(records);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])


    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return null;

  console.log(images);

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (

    <div className={`flex flex-col items-center text-center justify-evenly pt-20 px-6 md:px-10 transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}>
      <h2 className="text-4xl font-bold">Photo Gallery</h2>
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-500 mt-2 mb-5 ">Memories of my journey</p>
      <div className="justify-center gap-3 mb-6 ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md m-1 ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <Image
            width={200}
            height={200}
            key={index}
            src={`${process.env.NEXT_PUBLIC_POCKETBASE_API_URL}/api/files/${image.collectionId}/${image.id}/${image.image}`}
            alt={`Gallery ${index}`}
            className="w-full rounded-md shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
