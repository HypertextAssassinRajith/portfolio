"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import MindfulReaderRound from '../assets/images/Mindful-Reader-Round.png';
import Image from 'next/image';


const contributions = [
  {
    title: 'Mindfull Reader',
    description: 'A Online eBook Reader Mobile application',
    image: MindfulReaderRound.src,
    link: 'https://github.com/your-repo',
  },
  {
    title: 'Mindfull Reader',
    description: 'A Online eBook Reader Mobile application',
    image: MindfulReaderRound.src,
    link: 'https://github.com/your-repo',
  },
];

export default function RecentContributions() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className={`flex flex-col pt-23  lg:flex-row items-center justify-evenly  px-6 md:px-10 transition-colors duration-300  ${
      theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
    }`}>
      <h2 className="text-4xl font-bold pt-10">Recently Contribute</h2>
      <p className="text-xl font-semibold text-gray-700 dark:text-gray-500 mt-2 mb-20">Recent jobs</p>
      <div className="relative w-full mx-auto ">
        <Swiper
          cssMode={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation,Pagination, Mousewheel, Keyboard]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {contributions.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center w-2/3 gap-6 md:flex-row">
                <div className="bg-gray-200 p-6 rounded-full shadow-md">
                  <Image src={item.image} alt={item.title} className="w-24 h-24" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-gray-500">{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center md:w-3/4 mt-6 px-6 py-3 w-2/4  bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 space-x-2">
                      Github <ChevronRight size={20} />  
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev absolute top-1/2 -left-10 transform -translate-y-1/2" />
        <button className="swiper-button-next absolute top-1/2 -right-10 transform -translate-y-1/2" />
      </div>
    </div>
  );
}
