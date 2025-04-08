'use client'

import { UilEnvelopeAlt, UilMapMarker, UilPhoneVolume } from "@iconscout/react-unicons";
import {  SendHorizontal } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ContactForm = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);



        useEffect(() => {
          setMounted(true);
        }, []);
        if (!mounted) return null;


  return (
    <div className={`flex flex-col pt-23  w-full items-center justify-evenly  px-6 md:px-10 transition-colors duration-300  ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`} id="form">
        <h2 className="text-4xl font-bold pt-10">Contact Me</h2>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-500 mt-2 mb-10">Get connect with me</p>
        <div className="pb-8 rounded-xl  space-y-6">
        <div className="space-y-2">
                <h2 className="text-lg font-medium  flex items-center gap-2">
                    <UilPhoneVolume   size={30} color="#8200DB" /> Call Me
                </h2>
                <p className="text-gray-500">+94-756901293</p>
            </div>
            <div className="space-y-2">
                <h2 className="text-lg font-medium  flex items-center gap-2">
                    <UilEnvelopeAlt  size={30} color="#8200DB" /> Email Me
                </h2>
                <p className="text-gray-500">contact@rajithsanjaya.site</p>
            </div>
      <div className="space-y-2">
        <h2 className="text-lg font-medium  flex items-center gap-2">
        <UilMapMarker  size={30} color="#8200DB" />  Address
        </h2>
        <p className="text-gray-500">No 69 Sahanagama, Wikkal</p>
      </div>
      
      <div className="overflow-hidden rounded-xl shadow-md">
        <iframe
          className="w-full h-56"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5977087781984!2d79.84858661477436!3d7.160128817671699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTknMzYuNSJOIDc5wrA1MScwNS40IkU!5e0!3m2!1sen!2slk!4v1614159479821!5m2!1sen!2slk"
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </div>
      
      <form className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <input
          type="text"
          placeholder="Project"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border border-gray-300 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-purple-500"
        ></textarea>
        <a className="w-48  cursor-pointer px-6 py-5 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 flex items-center space-x-2 transition-transform duration-300 group">
            <span>Send Message</span>
            <SendHorizontal  className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </form>
    </div>
      </div>
  );
};

export default ContactForm;
