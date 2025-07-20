import { useEffect, useState } from 'react';
import api from '../api/axiosConfig';   // ✅ Your axios config import

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await api.get('/bookings');   // ✅ API call
        setBookings(res.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {bookings.map((b) => (
            <li key={b._id} className="mb-2 p-2 border rounded shadow">
              <strong>{b.userName}</strong> — {b.venue} — {b.bookingDate} at {b.bookingTime}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
