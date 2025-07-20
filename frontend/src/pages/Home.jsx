import { useNavigate } from 'react-router-dom';
import { FaRunning, FaFutbol, FaTableTennis, FaBasketballBall, FaVolleyballBall, FaBaseballBall } from 'react-icons/fa';
import cricketImg from '../assets/cricket.jpeg';
import footballImg from '../assets/football.jpeg';
import badmintonImg from '../assets/badminton.jpeg';
import tennisImg from '../assets/tennis.jpeg';
import basketballImg from '../assets/basket.jpeg';
import volleyballImg from '../assets/volleyball.jpeg';

export default function Home() {
  const navigate = useNavigate();

  const events = [
    { id: 1, name: "Box Cricket Arena", icon: <FaBaseballBall /> },
    { id: 2, name: "Football Turf", icon: <FaFutbol /> },
    { id: 3, name: "Badminton Court", icon: <FaTableTennis /> },
    { id: 4, name: "Tennis Ground", icon: <FaRunning /> },
    { id: 5, name: "Basketball Court", icon: <FaBasketballBall /> },
    { id: 6, name: "Volleyball Court", icon: <FaVolleyballBall /> },
  ];

  const handleBookNow = (sportName) => {
    navigate(`/venues/${sportName}`);
  };

  return (
    <div className="min-h-screen bg-[url('/assets/bg-sports.jpg')] bg-cover bg-center relative text-gray-800 font-sans">
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="relative z-10 flex flex-col">

        {/* Hero Section */}
        <section className="text-white text-center py-12 bg-gradient-to-r from-green-600 to-sky-500 shadow-lg">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Ready. Set. Book.</h1>
          <p className="text-xl">Discover your sport, lock your spot, and unleash your game. 🏅</p>
        </section>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center p-8 space-y-10">

          {/* Venues Section */}
          <section className="text-center max-w-6xl w-full">
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-green-800">Explore and Book Now!</h2>
              <p className="text-gray-700 mt-2">Cricket, Football, Badminton, Tennis, Basketball, Volleyball & more.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white/70 backdrop-blur-md p-4 rounded-lg shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2">
                    {event.icon} {event.name}
                  </h3>
                  <p className="text-gray-600 mt-1">Check for Available Slots</p>
                  <button
                    onClick={() => handleBookNow(event.name)}
                    className="mt-3 bg-gradient-to-r from-green-700 to-lime-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Sports Images with Quotes */}
          <section className="w-full max-w-6xl mt-10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">🏆 Get Inspired by Your Game</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[cricketImg, footballImg, badmintonImg, tennisImg, basketballImg, volleyballImg].map((img, idx) => {
                const quotes = [
                  "“Cricket is not just a game, it’s a way of life.”",
                  "“Football teaches teamwork and discipline.”",
                  "“In badminton, speed meets strategy.”",
                  "“Tennis is the game of focus and power.”",
                  "“Basketball — where hustle meets heart.”",
                  "“Volleyball is teamwork in motion.”"
                ];
                return (
                  <div key={idx} className="bg-white/80 p-4 rounded-lg shadow-md text-center backdrop-blur-sm">
                    <img src={img} alt="Sport" className="rounded mb-2 h-40 w-40 object-cover mx-auto" />
                    <p className="italic text-gray-700">{quotes[idx]}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Rewards Section */}
          <section className="mt-10 bg-green-800 text-white p-6 rounded-xl shadow-lg max-w-2xl text-center">
            <h2 className="text-2xl font-bold">🎁 Earn Rewards on Every Booking!</h2>
            <p className="mt-2 text-lg">Rack up points each time and redeem them for your next match!</p>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black text-white text-center p-4 mt-10">
          © 2025 Sports Booking — All rights reserved
        </footer>
      </div>
    </div>
  );
}
