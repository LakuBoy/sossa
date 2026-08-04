import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/coaches", label: "Coaches" },
    { path: "/athletes", label: "Athletes" },
    { path: "/schedule", label: "Schedule" },
    { path: "/gallery", label: "Gallery" },
    { path: "/magazine", label: "Magazine" },
    { path: "/register", label: "Register" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO - LEFT */}
          <Link to="/" className="flex items-center gap-3 group shrink-0 z-10">
            <img
              src="./icon.png"
              alt="SOSSA"
              className="h-12 w-12 rounded-full object-cover ring-2 ring-red-500 group-hover:scale-105 transition"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-black tracking-wide text-gray-900 dark:text-white">
                SOSSA
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sports Academy
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU - CENTERED */}
          <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 xl:px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? "text-red-500 bg-red-50 dark:bg-red-500/10"
                    : "text-gray-700 dark:text-gray-300 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DONATE BUTTON - RIGHT */}
          <div className="hidden lg:flex items-center shrink-0 z-10">
            <Link
              to="/donate"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-red-300/40 transition-all duration-300 flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 z-10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1.5 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-xl font-medium transition ${
                  isActive(link.path)
                    ? "bg-red-500 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* MOBILE DONATE */}
            <Link
              to="/donate"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold text-center flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}