import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex items-center justify-between">
      <h2 className="text-xl font-bold">AI Study Planner</h2>

      <ul className="flex gap-6">
        <li><Link className="hover:underline" to="/">Home</Link></li>
        <li><Link className="hover:underline" to="/about">About</Link></li>
        <li><Link className="hover:underline" to="/contact">Contact</Link></li>
      </ul>

      <button className="bg-white text-indigo-600 px-4 py-1 rounded-full font-semibold">
        Get Started
      </button>
    </nav>
  );
}
