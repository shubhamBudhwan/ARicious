import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <Image
            src="/placeholder.svg?height=100&width=100&text=AR"
            alt="ARicious Logo"
            width={100}
            height={100}
            className="h-24 w-24 rounded-full bg-blue-900"
          />
        </div>

        <div className="flex flex-col gap-4 text-right">
          <a href="#" className="hover:text-gray-300 transition">
            ABOUT
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            CONTACT US
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            TERM OF SERVICES
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            PRIVACY
          </a>

          <div className="flex justify-end gap-4 mt-2">
            {["facebook", "instagram", "linkedin", "youtube"].map(
              (social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 border border-white rounded flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4"></div>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
