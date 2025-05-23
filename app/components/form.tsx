
'use client'

import { UilEnvelopeAlt, UilMapMarker, UilPhoneVolume } from "@iconscout/react-unicons";
import { SendHorizontal } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

const ContactForm = () => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [project, setProject] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    const handleSendMessage = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const subject = project || "No Subject";
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
        const mailtoLink = `mailto:contact@rajithsanjaya.site?subject=${encodeURIComponent(subject)}&body=${body}`;
        window.location.href = mailtoLink;
    };

    
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("No 69 Sahanagama, Wikkal")}`;

    return (
        <div className={`flex flex-col pt-23 w-full items-center justify-evenly px-6 md:px-10 transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`} id="form">
            <h2 className="text-4xl font-bold pt-10">Contact Me</h2>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-500 mt-2 mb-10">Get connect with me</p>
            <div className="pb-8 rounded-xl space-y-6">
                <a className="space-y-1" href="tel:+94756901293">
                    <h2 className="text-lg font-medium flex items-center gap-2">
                        <UilPhoneVolume size={30} color="#8200DB" /> Call Me
                    </h2>
                    <p className="text-gray-500 mb-2">+94756901293</p>
                </a>
                <a className="space-y-1" href="mailto:contact@rajithsanjaya.site">
                    <h2 className="text-lg font-medium flex items-center gap-2">
                        <UilEnvelopeAlt size={30} color="#8200DB" /> Email Me
                    </h2>
                    <p className="text-gray-500 mb-2">contact@rajithsanjaya.site</p>
                </a>
                <a className="space-y-1" href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                    <h2 className="text-lg font-medium flex items-center gap-2">
                        <UilMapMarker size={30} color="#8200DB" /> Address
                    </h2>
                    <p className="text-gray-500 mb-2">No 69 Sahanagama, Wikkal</p>
                </a>
                <div className="overflow-hidden rounded-xl shadow-md">
                    <iframe
                        className="w-full h-56"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5977087781984!2d79.84858661477436!3d7.160128817671699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTknMzYuNSJOIDc5wrA1MScwNS40IkU!5e0!3m2!1sen!2slk!4v1614159479821!5m2!1sen!2slk"
                        allowFullScreen={false}
                        loading="lazy"
                    ></iframe>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Project"
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    ></textarea>
                    <a
                        href="#"
                        onClick={handleSendMessage}
                        className="w-48 cursor-pointer px-6 py-5 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 flex items-center space-x-2 transition-transform duration-300 group"
                    >
                        <span>Send Message</span>
                        <SendHorizontal className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
