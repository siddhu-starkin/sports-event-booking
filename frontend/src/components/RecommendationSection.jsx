import React from "react";

const recommendations = [
  {
    title: "Mountain Escape",
    price: "$250.00",
    img: "/src/assets/badminton2.jpeg",
  },
  {
    title: "Serene Lake",
    price: "$125.00",
    img: "/src/assets/football2.jpeg",
  },
  {
    title: "Forest Adventure",
    price: "$150.00",
    img: "/src/assets/cricket2.jpeg",
  },
];

const RecommendationSection = () => {
  return (
    <section className="my-12 px-4">
      <h2 className="text-2xl font-bold mb-6">Recommended For You</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {recommendations.map((rec, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
            <img src={rec.img} alt={rec.title} className="h-40 w-full object-cover" />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg mb-2">{rec.title}</h3>
              <span className="text-gray-800 font-bold text-xl mb-2">{rec.price}</span>
              <button className="mt-auto bg-black text-white px-4 py-2 rounded-lg self-start hover:bg-gray-800 transition">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendationSection; 