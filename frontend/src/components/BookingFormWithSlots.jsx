import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookingFormWithSlots({ venue, onClose }) {
  const [userName, setUserName] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(false);

  const allSlots = [
    '06:00 AM - 07:00 AM',
    '07:00 AM - 08:00 AM',
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
    '08:00 PM - 09:00 PM',
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Book {venue.name}</h2>
        <form onSubmit={handleBooking} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 w-full"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="date"
            className="border p-2 w-full"
            value={bookingDate}
            onChange={(e) => setBookingDate(e.target.value)}
            required
          />

          <div className="space-y-2">
            <p className="font-semibold">Select a Time Slot:</p>
            <div className="grid grid-cols-2 gap-2">
              {allSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  disabled={bookedSlots.includes(slot)}
                  onClick={() => setSelectedSlot(slot)}
                  className={`p-2 border rounded ${
                    bookedSlots.includes(slot)
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : selectedSlot === slot
                      ? 'bg-green-600 text-white'
                      : 'bg-white hover:bg-green-100'
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              disabled={loading}
            >
              {loading ? 'Booking...' : 'Confirm Booking'}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Cancel
            </button>
          </div>
        </form>

        {bookedSlots.length > 0 && (
          <div className="mt-4 text-sm text-gray-600">
            <p className="font-semibold">Booked Slots:</p>
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
