import { useEffect, useState } from "react";
import api from "../api/axios";
import { Plus, Calendar, MapPin, Pencil, Trash2, X } from "lucide-react";

const initialForm = {
  title: "",
  date: "",
  location: "",
  description: "",
};

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await api.get("/events");
      setEvents(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load events");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (event = null) => {
    if (event) {
      setEditingEvent(event);
      setFormData({
        title: event.title,
        date: event.date.split("T")[0],
        location: event.location,
        description: event.description,
      });
    } else {
      setEditingEvent(null);
      setFormData(initialForm);
    }
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingEvent) {
        await api.put(`/events/${editingEvent._id}`, formData);
      } else {
        await api.post("/events", formData);
      }

      setShowModal(false);
      fetchEvents();
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Failed to save event");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this event?")) return;

    try {
      await api.delete(`/events/${id}`);
      setEvents((prev) => prev.filter((e) => e._id !== id));
    } catch {
      alert("Failed to delete event");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading events...</p>
      </div>
    );
  }

  const inputClass = "w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Manage Events</h2>
          <p className="text-gray-500">Create and manage your academy events</p>
        </div>
        <button
          onClick={() => openModal()}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition flex items-center gap-2 shadow-lg"
        >
          <Plus className="w-5 h-5" />
          Add Event
        </button>
      </div>

      {events.length === 0 ? (
        <div className="text-center bg-white rounded-2xl shadow-md py-16">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No events yet. Add your first event!</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event._id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center gap-2 text-blue-100 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {new Date(event.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{event.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed mb-4">{event.description}</p>
                <p className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </p>
                <div className="mt-6 pt-4 border-t flex justify-between">
                  <button
                    onClick={() => openModal(event)}
                    className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-medium hover:text-blue-700 transition"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="inline-flex items-center gap-1.5 text-red-600 text-sm font-medium hover:text-red-700 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl w-full max-w-lg space-y-5 animate-modal shadow-2xl"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-bold text-gray-900">
                {editingEvent ? "Edit Event" : "Add New Event"}
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Event Title"
              required
              className={inputClass}
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className={inputClass}
            />

            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              required
              className={inputClass}
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              required
              rows="4"
              className={`${inputClass} resize-none`}
            />

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Save Event
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}