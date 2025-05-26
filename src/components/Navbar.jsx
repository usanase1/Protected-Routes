import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">MyApp</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/login" className="text-white hover:text-gray-200">
            Login
          </Link>
          <Link to="/dashboard" className="text-white hover:text-gray-200">
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
