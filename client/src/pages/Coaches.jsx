import { Link } from "react-router-dom";
import { Award, Users, Target } from "lucide-react";

export default function Coaches() {
  const coaches = [
    {
      name: "Coach Wal",
      role: "Head Coach",
      img: "/coach-wal.jpeg",
      bio: "Coach Wal has over 10 years of experience training youth and adult basketball players, focusing on skill development and teamwork.",
      instagram: "https://www.instagram.com/wal_deng17?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      facebook: "https://www.facebook.com/share/1bV3aTnZ2a/?mibextid=wwXIfr",
    },
    {
      name: "Coach Akech",
      role: "Assistant Coach",
      img: "/coach-akech.jpeg",
      bio: "Coach Akech specializes in advanced techniques and personalized coaching to help each player reach their full potential.",
      instagram: "https://www.instagram.com/akec_wuoi_31?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      facebook: "https://www.facebook.com/share/1CiiYjZ8z7/?mibextid=wwXIfr",
    },
  ];

  const philosophy = [
    { title: "Technical Excellence", desc: "Mastering the fundamentals and advanced skills of the game.", icon: <Target className="w-8 h-8" /> },
    { title: "Teamwork", desc: "Building chemistry and trust between players on and off the court.", icon: <Users className="w-8 h-8" /> },
    { title: "Personal Growth", desc: "Developing character, discipline, and leadership qualities.", icon: <Award className="w-8 h-8" /> },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-slate-900 text-white py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Coaches</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            The team behind our champions
          </p>
        </div>
      </section>

      {/* Coaches Profiles */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Expert <span className="text-red-500">Coaches</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to developing the next generation of basketball stars.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {coaches.map((coach, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={coach.img}
                    alt={coach.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold">{coach.name}</h3>
                    <p className="text-red-400 font-semibold">{coach.role}</p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">{coach.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href={coach.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
                      </svg>
                    </a>
                    <a
                      href={coach.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Coaching <span className="text-red-500">Philosophy</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our coaches believe in a holistic approach, combining technical training, teamwork, and personal development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-red-500 flex items-center justify-center mb-5 group-hover:bg-red-500 group-hover:text-white transition">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-24 bg-gradient-to-r from-gray-800 to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Train with Our Expert Coaches!
          </h2>
          <p className="text-xl mb-10 text-gray-300">
            Take the first step towards becoming a better player.
          </p>
          <Link
            to="/register"
            className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 inline-block"
          >
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
}