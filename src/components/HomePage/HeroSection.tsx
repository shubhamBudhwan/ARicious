import React from "react";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-8 px-4 text-center">
      <h1 className="text-4xl font-bold text-blue-500 mb-6">
        Be Greedy To ASK
      </h1>

      <div className="relative max-w-md mx-auto mb-12">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
        <div className="max-w-xs text-left text-gray-600">
          <p className="italic mb-2">"Ask more, know more ,achieve more"</p>
          <p className="text-sm">
            just click on mentors profile and get your answer via call , chat,
            videocall instantly and also fix your 1:1meet .
          </p>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition">
            Find People
          </button>
        </div>
        <div className="w-64 h-48 bg-red-500 rounded-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
