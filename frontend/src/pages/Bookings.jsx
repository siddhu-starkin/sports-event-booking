import { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get('/bookings');
        setBookings(res.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 p-6 text-white font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center underline underline-offset-4 drop-shadow">
        📝 My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center text-lg bg-white/20 backdrop-blur-md p-4 rounded-xl shadow-lg">
          No bookings found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((b) => (
            <div
              key={b._id}
              className="bg-white/90 text-gray-900 backdrop-blur-md p-4 rounded-xl shadow-xl hover:scale-[1.02] transition"
            >
              <h2 className="text-xl font-bold mb-2">{b.userName}</h2>
              <p className="mb-1">
                <span className="font-semibold text-green-700">Venue:</span> {b.venue}
              </p>
              <p className="mb-1">
                <span className="font-semibold text-blue-700">Date:</span> {b.bookingDate}
              </p>
              <p>
                <span className="font-semibold text-purple-700">Time:</span> {b.bookingTime}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
