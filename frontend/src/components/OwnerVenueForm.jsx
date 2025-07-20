import { useState } from 'react';
import api from '../api/axiosConfig';

export default function OwnerVenueForm({ onClose, onVenueAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    sportName: '',
    place: '',
    price: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/ownervenues', formData);
      onVenueAdded(res.data);   // ✅ Update parent component venues
      onClose();
    } catch (err) {
      console.error('❌ Error submitting venue:', err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Add Your Venue</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Venue Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
          <input
            type="text"
            name="sportName"
            placeholder="Sport Name (must match exactly)"
            value={formData.sportName}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
          <input
            type="text"
            name="place"
            placeholder="Location"
            value={formData.place}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
          <input
            type="number"
            name="price"
            placeholder="Price per Hour"
            value={formData.price}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className="border p-2 w-full rounded"
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
