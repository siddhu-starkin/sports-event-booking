import { useNavigate } from 'react-router-dom';
import cricketImg from '../assets/cricket.jpeg';
import footballImg from '../assets/football.jpeg';
import badmintonImg from '../assets/badminton.jpeg';
import tennisImg from '../assets/tennis.jpeg';
import basketballImg from '../assets/basket.jpeg';
import volleyballImg from '../assets/volleyball.jpeg';

export default function Home() {
  const navigate = useNavigate();

  const events = [
    { id: 1, name: "Box Cricket Arena", img: cricketImg },
    { id: 2, name: "Football Turf", img: footballImg },
    { id: 3, name: "Badminton Court", img: badmintonImg },
    { id: 4, name: "Tennis Ground", img: tennisImg },
    { id: 5, name: "Basketball Court", img: basketballImg },
    { id: 6, name: "Volleyball Court", img: volleyballImg },
  ];

  const handleBookNow = (sportName) => {
    navigate(`/venues/${sportName}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-blue-100">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-green-400 to-blue-500 text-white py-16 px-4 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">🏆 Book Your Next Game</h1>
        <p className="text-xl mt-4 font-medium">Find and reserve the best sports venues in your city.</p>
        <button
          onClick={() => handleBookNow(events[0].name)}
          className="mt-8 px-8 py-3 bg-white text-green-600 font-bold rounded-full shadow hover:bg-green-100 transition"
        >
          Get Started
        </button>
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/80 to-transparent" />
      </header>

      {/* Events Section */}
      <main className="flex-grow flex flex-col items-center px-4 py-12">
        <section className="w-full max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Popular Venues</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col items-center p-6 group border border-gray-100"
              >
                <img src={event.img} alt={event.name} className="rounded-xl mb-4 h-40 w-40 object-cover group-hover:scale-105 transition-transform" />
                <h3 className="text-xl font-semibold text-green-700 mb-2">{event.name}</h3>
                <button
                  onClick={() => handleBookNow(event.name)}
                  className="mt-2 px-6 py-2 bg-green-600 text-white rounded-full font-semibold shadow hover:bg-green-700 transition"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-16 w-full max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Why Choose Sports Booking?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="material-icons text-4xl text-green-500 mb-2">bolt</span>
              <h3 className="font-semibold text-lg mb-1">Fast & Easy</h3>
              <p className="text-gray-500">Book your favorite venue in just a few clicks.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="material-icons text-4xl text-blue-500 mb-2">verified</span>
              <h3 className="font-semibold text-lg mb-1">Trusted Venues</h3>
              <p className="text-gray-500">All venues are verified and highly rated by players.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <span className="material-icons text-4xl text-yellow-500 mb-2">star</span>
              <h3 className="font-semibold text-lg mb-1">Rewards</h3>
              <p className="text-gray-500">Earn points on every booking and redeem for discounts.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-gray-600 text-center py-6 mt-8 shadow-inner">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <span>© 2025 Sports Booking</span>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-green-600 transition">Contact</a>
          <a href="#" className="hover:text-green-600 transition">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
