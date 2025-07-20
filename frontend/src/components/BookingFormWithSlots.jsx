import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookingFormWithSlots({ venue, onClose }) {
  const [userName, setUserName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const allSlots = [
    '06:00 AM - 07:00 AM', '07:00 AM - 08:00 AM', '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM', '01:00 PM - 02:00 PM', '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM', '04:00 PM - 05:00 PM', '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM', '07:00 PM - 08:00 PM', '08:00 PM - 09:00 PM',
    '09:00 PM - 10:00 PM',
  ];

  useEffect(() => {
    const fetchBookedSlots = async () => {
      if (!bookingDate) return;
      try {
        const res = await axios.get('http://localhost:5000/api/bookings');
        const bookingsForVenueAndDate = res.data.filter(
          (b) => b.venue === venue.name && b.bookingDate === bookingDate
        );
        const slots = bookingsForVenueAndDate.map((b) => b.bookingTime);
        setBookedSlots(slots);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBookedSlots();
  }, [bookingDate, venue.name]);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert('Please select a time slot!');
      return;
    }
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/bookings', {
        userName,
        venue: venue.name,
        bookingDate,
        bookingTime: selectedSlot,
      });
      alert('Booking Successful!');
      onClose();
    } catch (error) {
      console.error(error);
      alert('Booking Failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 text-gray-800">
        <h2 className="text-2xl font-bold mb-4 text-center">📅 Book {venue.name}</h2>

        <form onSubmit={handleBooking} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <input
            type="date"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-green-400"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />

          <div>
            <p className="font-semibold mb-2">Select a Time Slot:</p>
            <div className="grid grid-cols-2 gap-3">
              {allSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  disabled={bookedSlots.includes(slot)}
                  onClick={() => setSelectedSlot(slot)}
                  className={`px-3 py-2 rounded-md border transition ${
                    bookedSlots.includes(slot)
                      ? 'bg-gray-300 text-white cursor-not-allowed opacity-70'
                      : selectedSlot === slot
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-green-700 hover:bg-green-100'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                loading
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {loading ? 'Booking...' : 'Confirm Booking'}
            </button>

            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-700 transition"
            >
              Cancel
            </button>
          </div>
        </form>

        {bookedSlots.length > 0 && (
          <div className="mt-6 text-sm text-gray-700">
            <p className="font-semibold">⛔ Already Booked Slots:</p>
            <ul className="list-disc pl-5">
              {bookedSlots.map((slot, idx) => (
                <li key={idx}>{slot}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
