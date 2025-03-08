import React from "react";
import Image from "next/image";

const Mentors = () => {
  return (
    <section className="py-8 px-4 bg-white">
      <h2 className="text-2xl font-semibold text-blue-500 text-center mb-8">
        Best Mentors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { name: "Nidhi Bajeli", role: "Full Stack Developer" },
          { name: "Mahima Bhamla", role: "Full Stack Developer" },
          { name: "Sanjana Chauhan", role: "Full Stack Developer" },
          { name: "Sneha Kukrety", role: "Full Stack Developer" },
        ].map((mentor, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-200 mb-2">
              <Image
                src={`/placeholder.svg?height=128&width=128&text=${
                  mentor.name.split(" ")[0]
                }`}
                alt={mentor.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-bold text-yellow-500">{mentor.name}</h3>
            <p className="text-sm text-gray-600">{mentor.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mentors;
