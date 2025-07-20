import { useState } from 'react';
import api from '../api/axiosConfig';

export default function BookingForm({ venue, onClose }) {
  const [userName, setUserName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');

  const handleConfirm = async () => {
    try {
      await api.post('/bookings', {
        userName,
        venue: venue.name,
        bookingDate,
        bookingTime,
      });
      alert('✅ Booking Confirmed!');
      onClose();
    } catch (err) {
      console.error('Booking Error:', err);
      alert('❌ Failed to book. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">
          Book {venue.name}
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="time"
          value={bookingTime}
          onChange={(e) => setBookingTime(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleConfirm}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}
