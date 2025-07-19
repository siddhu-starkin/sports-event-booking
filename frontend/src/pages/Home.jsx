import cricketImg from '../assets/cricket.jpeg';
import footballImg from '../assets/football.jpeg';
import badmintonImg from '../assets/badminton.jpeg';
import tennisImg from '../assets/tennis.jpeg';
import basketballImg from '../assets/basket.jpeg';
import volleyballImg from '../assets/volleyball.jpeg';

export default function Home() {
  const events = [
    { id: 1, name: "Box Cricket Arena" },
    { id: 2, name: "Football Turf" },
    { id: 3, name: "Badminton Court" },
    { id: 4, name: "Tennis Ground" },
    { id: 5, name: "Basketball Court" },
    { id: 6, name: "Volleyball Court" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header Section */}
      <header className="bg-sky-500 text-white p-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">🏆 Sports Event Booking Platform</h1>
        <p className="text-lg mt-2">
          Book your favorite venues anytime, anywhere.
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center p-10 space-y-10">
        {/* Venues Section */}
        <section className="text-center">
          <div className="p-6 rounded shadow text-center max-w-2xl bg-white">
            <h2 className="text-3xl font-bold text-green-700">
              Explore and Book Now!
            </h2>
            <p className="text-gray-600 mt-2">
              Cricket, Football, Badminton, Tennis, Basketball, Volleyball & more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white p-4 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform"
              >
                <h3 className="text-xl font-semibold text-green-600">{event.name}</h3>
                <p className="text-gray-500 mt-1">Check for Available Slots</p>
                <button className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Sports Images with Quotes - First Row */}
        <section className="mt-10 text-center w-full">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            🏅 Explore Sports & Inspire Yourself
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
              <img
                src={cricketImg}
                alt="Cricket"
                className="rounded mb-2 h-40 w-40 object-cover"
              />
              <p className="italic text-gray-600">
                “Cricket is not just a game, it’s a way of life.”
              </p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
              <img
                src={footballImg}
                alt="Football"
                className="rounded mb-2 h-40 w-40 object-cover"
              />
              <p className="italic text-gray-600">
                “Football teaches teamwork and discipline.”
              </p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
              <img
                src={badmintonImg}
                alt="Badminton"
                className="rounded mb-2 h-40 w-40 object-cover"
              />
              <p className="italic text-gray-600">
                “In badminton, speed meets strategy.”
              </p>
            </div>
          </div>

          {/* Sports Images with Quotes - Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
              <img
                src={tennisImg}
                alt="Tennis"
                className="rounded mb-2 h-40 w-40 object-cover"
              />
              <p className="italic text-gray-600">
                “Tennis is the game of focus and power.”
              </p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
              <img
                src={basketballImg}
                alt="Basketball"
                className="rounded mb-2 h-40 w-40 object-cover"
              />
              <p className="italic text-gray-600">
                “Basketball — where hustle meets heart.”
              </p>
            </div>

            <div className="bg-white rounded shadow p-4 flex flex-col items-center text-center">
              <img
                src={volleyballImg}
                alt="Volleyball"
                className="rounded mb-2 h-40 w-40 object-cover"
              />
              <p className="italic text-gray-600">
                “Volleyball is teamwork in motion.”
              </p>
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="mt-10 text-center bg-green-700 text-white p-6 rounded shadow w-full max-w-2xl">
          <h2 className="text-2xl font-bold">🎁 Earn Rewards on Every Booking!</h2>
          <p className="mt-2 text-lg">
            For every booking, earn reward points & redeem them next time!
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4">
        © 2025 Sports Booking — All rights reserved
      </footer>
    </div>
  );
}
