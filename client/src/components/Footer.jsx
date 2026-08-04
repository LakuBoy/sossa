import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

export default function Footer() {
  const quickLinks = [
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
    { path: "/donate", label: "Donate" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="./icon.png"
                alt="SOSSA"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-red-500"
              />
              <div>
                <h3 className="text-xl font-black text-white">SOSSA</h3>
                <p className="text-xs text-gray-400">Sports Academy</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Solid Skills Sports Academy is committed to creating a vibrant
              society through sports training and value addition to the youth
              of South Sudan in order to enhance peace in the country.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/wal_deng17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1bV3aTnZ2a/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-red-400 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Abuja Park, Nalaya State
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">0780 908984</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  solidskillssportsacademy@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Mon-Fri: 4PM-8PM
                  <br />
                  Sat: 9AM-6PM
                  <br />
                  Sun: 2PM-6PM
                </span>
              </li>
            </ul>
          </div>

          {/* Donate CTA */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support Us</h3>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Your donation helps young athletes grow, train, and succeed.
              Every contribution makes a difference.
            </p>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
            >
              <Heart className="w-4 h-4" />
              Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SOSSA - Solid Skills Sports Academy. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Building Champions On and Off the Court
          </p>
        </div>
      </div>
    </footer>
  );
}