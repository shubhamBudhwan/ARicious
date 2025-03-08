import React from "react";

const Categories = () => {
  return (
    <section className="bg-pink-50 py-8 px-4">
      <h2 className="text-2xl font-semibold text-blue-500 text-center mb-8">
        See what can you ask from ARicious
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Business</h3>
          <p className="text-xs text-gray-600">
            "Got a business question or concern that's been keeping you up at
            night? Whether related to funding, networking or anything ask here."
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Programming Languages</h3>
          <p className="text-xs text-gray-600">
            "Stuck on a coding problem or need guidance on a programming
            concept? Ask here."
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Sports</h3>
          <p className="text-xs text-gray-600">
            "Sports on your mind? Get answers to your burning questions here and
            take your sports knowledge to the next level!"
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Health & Nutrition</h3>
          <p className="text-xs text-gray-600">
            Personalized advice on mental health, physical health, nutrition and
            fitness, struggling with illness, looking for best advice go and
            ask.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-2">Relationships</h3>
          <p className="text-xs text-gray-600">
            "Relationship advice, Breakup, Crisis, Unavailability, Dating,
            Partner...any relationship problems go and ask. We can help."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
