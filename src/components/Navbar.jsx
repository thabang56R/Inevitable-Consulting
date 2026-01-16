import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <div className="container-wide flex justify-between items-center py-6">
        <div className="text-primary font-bold text-lg">
          INEVITABLE
        </div>

        <nav className="space-x-10 text-sm text-gray-700">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/csr">CSR</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
