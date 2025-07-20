import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookingFormWithSlots from '../components/BookingFormWithSlots';
import OwnerVenueForm from '../components/OwnerVenueForm';
import api from '../api/axiosConfig';

// Import all images
import cricket1Img from '../assets/cricket1.jpeg';
import cricket2Img from '../assets/cricket2.jpeg';
import cricket3Img from '../assets/cricket3.jpeg';
import cricket4Img from '../assets/cricket4.jpeg';
import cricket5Img from '../assets/cricket5.jpeg';
import cricket6Img from '../assets/cricket6.jpeg';
import football1Img from '../assets/football1.jpeg';
import football2Img from '../assets/football2.jpeg';
import football3Img from '../assets/football3.jpeg';
import football4Img from '../assets/football4.jpeg';
import football5Img from '../assets/football5.jpeg';
import football6Img from '../assets/football6.jpeg';
import badminton1Img from '../assets/badminton1.jpeg';
import badminton2Img from '../assets/badminton2.jpeg';
import badminton3Img from '../assets/badminton3.jpeg';
import badminton4Img from '../assets/badminton4.jpeg';
import badminton5Img from '../assets/badminton5.jpeg';
import badminton6Img from '../assets/badminton6.jpeg';
import tennis1Img from '../assets/tennis1.jpeg';
import tennis2Img from '../assets/tennis2.jpeg';
import tennis3Img from '../assets/tennis3.jpeg';
import tennis4Img from '../assets/tennis4.jpeg';
import tennis5Img from '../assets/tennis5.jpeg';
import tennis6Img from '../assets/tennis6.jpeg';
import basket1Img from '../assets/basket1.jpeg';
import basket2Img from '../assets/basket2.jpeg';
import basket3Img from '../assets/basket3.jpeg';
import basket4Img from '../assets/basket4.jpeg';
import basket5Img from '../assets/basket5.jpeg';
import basket6Img from '../assets/basket6.jpeg';
import volley1Img from '../assets/volley1.jpeg';
import volley2Img from '../assets/volley2.jpeg';
import volley3Img from '../assets/volley3.jpeg';
import volley4Img from '../assets/volley4.jpeg';
import volley5Img from '../assets/volley5.jpeg';
import volley6Img from '../assets/volley6.jpeg';

export default function Venues() {
  const { sportName } = useParams();
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [showOwnerForm, setShowOwnerForm] = useState(false);
  const [ownerVenues, setOwnerVenues] = useState([]);

  const allVenues = {
    "Box Cricket Arena": [
      { name: 'Box Cricket Turf 1', place: 'Hyderabad', price: 1200, img: cricket1Img },
      { name: 'Box Cricket Turf 2', place: 'Chennai', price: 1000, img: cricket2Img },
      { name: 'Box Cricket Turf 3', place: 'Bangalore', price: 1500, img: cricket3Img },
      { name: 'Box Cricket Turf 4', place: 'Pune', price: 900, img: cricket4Img },
      { name: 'Box Cricket Turf 5', place: 'Mumbai', price: 1000, img: cricket5Img },
      { name: 'Box Cricket Turf 6', place: 'Vizag', price: 900, img: cricket6Img },
    ],
    "Football Turf": [
      { name: 'Football Turf 1', place: 'Hyderabad', price: 1200, img: football1Img },
      { name: 'Football Turf 2', place: 'Chennai', price: 1000, img: football2Img },
      { name: 'Football Turf 3', place: 'Bangalore', price: 1500, img: football3Img },
      { name: 'Football Turf 4', place: 'Pune', price: 900, img: football4Img },
      { name: 'Football Turf 5', place: 'Mumbai', price: 1000, img: football5Img },
      { name: 'Football Turf 6', place: 'Vizag', price: 900, img: football6Img },
    ],
    "Badminton Court": [
      { name: 'Badminton Court 1', place: 'Hyderabad', price: 500, img: badminton1Img },
      { name: 'Badminton Court 2', place: 'Mumbai', price: 600, img: badminton2Img },
      { name: 'Badminton Court 3', place: 'Chennai', price: 550, img: badminton3Img },
      { name: 'Badminton Court 4', place: 'Delhi', price: 650, img: badminton4Img },
      { name: 'Badminton Court 5', place: 'Pune', price: 700, img: badminton5Img },
      { name: 'Badminton Court 6', place: 'Vizag', price: 700, img: badminton6Img },
    ],
    "Tennis Ground": [
      { name: 'Tennis Court 1', place: 'Hyderabad', price: 800, img: tennis1Img },
      { name: 'Tennis Court 2', place: 'Mumbai', price: 850, img: tennis2Img },
      { name: 'Tennis Court 3', place: 'Chennai', price: 900, img: tennis3Img },
      { name: 'Tennis Court 4', place: 'Delhi', price: 950, img: tennis4Img },
      { name: 'Tennis Court 5', place: 'Pune', price: 1000, img: tennis5Img },
      { name: 'Tennis Court 6', place: 'Vizag', price: 1000, img: tennis6Img },
    ],
    "Basketball Court": [
      { name: 'Basketball Court 1', place: 'Hyderabad', price: 1100, img: basket1Img },
      { name: 'Basketball Court 2', place: 'Mumbai', price: 1200, img: basket2Img },
      { name: 'Basketball Court 3', place: 'Chennai', price: 1150, img: basket3Img },
      { name: 'Basketball Court 4', place: 'Delhi', price: 1000, img: basket4Img },
      { name: 'Basketball Court 5', place: 'Pune', price: 1050, img: basket5Img },
      { name: 'Basketball Court 6', place: 'Vizag', price: 1050, img: basket6Img },
    ],
    "Volleyball Court": [
      { name: 'Volleyball Court 1', place: 'Hyderabad', price: 1100, img: volley1Img },
      { name: 'Volleyball Court 2', place: 'Bangalore', price: 1150, img: volley2Img },
      { name: 'Volleyball Court 3', place: 'Pune', price: 900, img: volley3Img },
      { name: 'Volleyball Court 4', place: 'Mumbai', price: 1100, img: volley4Img },
      { name: 'Volleyball Court 5', place: 'Chennai', price: 1150, img: volley5Img },
      { name: 'Volleyball Court 6', place: 'Vizag', price: 900, img: volley6Img },
    ],
  };

  const defaultVenues = allVenues[sportName] || [];

  useEffect(() => {
    const fetchOwnerVenues = async () => {
      try {
        const res = await api.get('/ownervenues');
        setOwnerVenues(res.data);
      } catch (err) {
        console.error('❌ Error fetching owner venues:', err);
      }
    };
    fetchOwnerVenues();
  }, []);

  const handleVenueAdded = (newVenue) => {
    setOwnerVenues((prev) => [...prev, newVenue]);
  };

  const combinedVenues = [
    ...defaultVenues,
    ...ownerVenues.filter((v) => v.sportName === sportName),
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">{sportName} Venues</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {combinedVenues.map((venue, index) => (
          <div
            key={index}
            className="border rounded shadow p-4 text-center transform transition-transform hover:scale-105"
            style={{ backgroundColor: '#f372fc' }}
          >
            <img
              src={venue.img || venue.imageUrl}
              alt={venue.name}
              className="h-60 w-full object-cover rounded mb-2"
            />
            <h2 className="text-xl font-bold text-white">{venue.name}</h2>
            <p className="text-white">Location: {venue.place}</p>
            <p className="text-white">Price per Hour: ₹{venue.price}</p>
            <button
              onClick={() => setSelectedVenue(venue)}
              className="mt-2 bg-black text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {selectedVenue && (
        <BookingFormWithSlots
          venue={selectedVenue}
          onClose={() => setSelectedVenue(null)}
        />
      )}

      <div className="mt-8 w-full">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-green-600 w-full"
          onClick={() => setShowOwnerForm(true)}
        >
          Add Your Venue
        </button>
        {showOwnerForm && (
          <OwnerVenueForm
            onClose={() => setShowOwnerForm(false)}
            onVenueAdded={handleVenueAdded}
          />
        )}
      </div>
    </div>
  );
}
