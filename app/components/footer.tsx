import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white text-center py-10">
      <div className="container mx-auto">
        <nav className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            Portfolio
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>

        <h2 className="text-2xl font-bold">Rajith Sanjaya</h2>
        <p className="text-sm">Full Stack Developer</p>

        <div className="flex justify-center space-x-4 my-4">
          <a href="#" className="text-xl hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-xl hover:text-gray-300">
            <FaWhatsapp />
          </a>
        </div>

        <p className="text-xs opacity-75">
          Developed and maintained by © Rajith Sanjaya. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
