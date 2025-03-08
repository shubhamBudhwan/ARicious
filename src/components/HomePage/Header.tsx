import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-100 p-4 flex justify-between ">
      <div className="flex items-center">
        <Image
          src="/home-logo.png"
          //   src="/footer-logo.png"
          alt="ARicious Logo"
          width={200}
          height={10}
          className="w-auto "
        />
      </div>
      <div className="flex items-center mt-6 gap-2 h-full">
        <button className="px-4 py-1 border border-orange-400 text-orange-400 rounded-full hover:bg-orange-50 transition">
          Login
        </button>
        <button className="px-4 py-1 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition">
          Be a Mentor
        </button>
        <User className="ml-2 h-6 w-6" />
      </div>
    </header>
  );
};

export default Header;
