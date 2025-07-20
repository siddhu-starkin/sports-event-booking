import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🏏 Sports Booking</h1>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:text-green-400">Home</Link>
        <Link to="/bookings" className="hover:text-green-400">Bookings</Link>
        <Link to="/login" className="hover:text-green-400">Login</Link>
        <Link to="/register" className="hover:text-green-400">Register</Link>

        {/* Rewards Link with Icon */}
        <Link to="/rewards" className="flex items-center space-x-1 hover:text-green-400">
          <span>🎁</span>
          <span className="text-sm font-medium">Rewards</span>
        </Link>
      </div>
    </nav>
  );
}
