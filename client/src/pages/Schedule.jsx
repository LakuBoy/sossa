import { useEffect, useState } from "react";
import api from "../api/axios";
import { Calendar, MapPin, Clock, Download } from "lucide-react";

export default function Schedule() {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const schedule = {
    "Private-Training": ["2:00 PM - 4:00 PM", "2:00 PM - 4:00 PM", "2:00 PM - 4:00 PM", "2:00 PM - 4:00 PM", "2:00 PM - 4:00 PM", "9:00 AM - 11:00 AM", "9:00 AM - 11:00 AM"],
    "Group-Training": ["4:00 PM - 6:00 PM", "4:00 PM - 6:00 PM", "-", "4:00 PM - 6:00 PM", "-", "9:00 AM - 11:00 AM", "-"],
    "Team-Training": ["6:00 PM - 8:00 PM", "-", "6:00 PM - 8:00 PM", "-", "6:00 PM - 8:00 PM", "11:00 AM - 1:00 PM", "-"],
    "Camps": ["-", "-", "-", "-", "-", "2:00 PM - 6:00 PM", "2:00 PM - 6:00 PM"],
    "Shooting-School": ["-", "6:00 PM - 8:00 PM", "-", "6:00 PM - 8:00 PM", "-", "11:00 AM - 1:00 PM", "-"],
  };

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await api.get("/events");
        setEvents(res.data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Training Schedule</h1>
          <p className="text-xl md:text-2xl text-green-100">
            Stay on track with your sessions and upcoming events.
          </p>
        </div>
      </section>

      {/* Weekly Training Schedule */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Weekly Training <span className="text-emerald-500">Schedule</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our weekly training programs designed to develop complete athletes.
            </p>
          </div>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-emerald-600 text-white text-left">
                  <th className="px-6 py-4">Program</th>
                  {days.map((day) => (
                    <th key={day} className="px-4 py-4 font-semibold">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.keys(schedule).map((program, idx) => (
                  <tr
                    key={idx}
                    className={`border-t hover:bg-gray-50 transition ${
                      idx % 2 === 0 ? "bg-gray-50/50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-emerald-700 whitespace-nowrap">{program}</td>
                    {schedule[program].map((time, i) => (
                      <td
                        key={i}
                        className={`px-4 py-4 text-center whitespace-nowrap ${
                          time !== "-" ? "text-gray-800 font-medium" : "text-gray-300"
                        }`}
                      >
                        {time !== "-" && (
                          <span className="inline-flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-emerald-500" />
                            {time}
                          </span>
                        )}
                        {time === "-" && "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoming Events (Dynamic from DB) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-red-500">Events</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't miss out on our exciting tournaments and events.
            </p>
          </div>

          {loading ? (
            <p className="text-center text-gray-500">Loading events...</p>
          ) : events.length === 0 ? (
            <div className="text-center bg-gray-50 rounded-2xl py-16">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No upcoming events yet.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <div
                  key={event._id}
                  className="group relative bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mt-8 -mr-8"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 text-white/90 mb-3">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition">
                      {event.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed mb-4">{event.description}</p>
                    {event.location && (
                      <p className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Download Button */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want a copy of the full schedule?
          </h3>
          <button className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-red-700 hover:scale-105 transition-all inline-flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Full Schedule (PDF)
          </button>
        </div>
      </section>
    </div>
  );
}