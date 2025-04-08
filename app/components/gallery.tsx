'use client'

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import PocketBase, { RecordModel } from "pocketbase";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_API_URL);

const categories = ["All", "Events", "Captures", "Travels", "Designs", "Works"];

export default function ImageGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [images, setImages] = useState<RecordModel[]>([]);
  const [selectedImage, setSelectedImage] = useState<RecordModel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const records = await pb.collection("Galary").getFullList();
        setImages(records);
        console.log(records);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

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
    <div
      className={`flex flex-col items-center text-center justify-evenly pt-20 px-6 md:px-10 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
      id="gallery"
    >
      <h2 className="text-4xl font-bold">Photo Gallery</h2>
      <p className="text-lg font-semibold text-gray-700 dark:text-gray-500 mt-2 mb-5">
        Memories of my journey
      </p>
      <LayoutGroup>
        <div className="gap-3 mb-6 relative">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-md m-1 focus:outline-none ${
                  isSelected ? " " : "bg-gray-200 text-gray-800"
                }`}
              >
                {category}
                {isSelected && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-blue-600"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </LayoutGroup>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index} onClick={() => setSelectedImage(image)} className="cursor-pointer">
            <Image
              width={200}
              height={200}
              src={`${process.env.NEXT_PUBLIC_POCKETBASE_API_URL}/api/files/${image.collectionId}/${image.id}/${image.image}`}
              alt={`Gallery ${index}`}
              className="w-full rounded-md shadow-lg"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={`${process.env.NEXT_PUBLIC_POCKETBASE_API_URL}/api/files/${selectedImage.collectionId}/${selectedImage.id}/${selectedImage.image}`}
              alt="Full preview"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="rounded-lg shadow-2xl max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
