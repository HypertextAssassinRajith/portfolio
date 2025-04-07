'use client'

import { SendHorizontal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export default function DeveloperCard() {
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
            <div className="bg-purple-600 text-white p-6 rounded-2xl max-w-md mb-3">
                <h2 className="text-2xl font-bold">Do you looking for developer</h2>
                <p className="text-sm mt-2">
                    Quickly contact me from here and get start your project right away
                </p>
                <a className="cursor-pointer mt-4 px-4 py-2 bg-white text-purple-600 rounded-lg border border-purple-600 flex items-center gap-2 hover:bg-purple-100"
                    href='mailto:contact@rajithsanjaya.site'
                >
                    Contact Me <SendHorizontal size={20} />
                </a>
            </div>
        </div>
      
    );
  }
  