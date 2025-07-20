import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md border-b border-gray-200 px-6 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <span className="text-2xl font-extrabold text-green-600">🏏</span>
        <h1 className="text-xl font-bold text-gray-800 tracking-tight">Sports Booking</h1>
      </div>
      <div className="space-x-6 flex items-center text-gray-700 font-medium">
        <Link to="/" className="hover:text-green-600 transition-colors flex items-center gap-1">
          <span className="material-icons">home</span>
          Home
        </Link>
        <Link to="/bookings" className="hover:text-green-600 transition-colors flex items-center gap-1">
          <span className="material-icons">event</span>
          Bookings
        </Link>
        <Link to="/login" className="hover:text-green-600 transition-colors flex items-center gap-1">
          <span className="material-icons">login</span>
          Login
        </Link>
        <Link to="/register" className="hover:text-green-600 transition-colors flex items-center gap-1">
          <span className="material-icons">person_add</span>
          Register
        </Link>
        <Link to="/rewards" className="hover:text-green-600 transition-colors flex items-center gap-1">
          <span className="material-icons">card_giftcard</span>
        </Link>
      </div>
    </nav>
  );
}
