import { useEffect, useState, useRef } from "react";
import api from "../api/axios";
import {
  Trash2,
  Filter,
  Users,
  Ruler,
  Calendar,
  Target,
  Mail,
  Phone,
  Pencil,
  Plus,
  X,
  Image,
  BookOpen,
} from "lucide-react";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  height: "",
  position: "",
  program: "",
  notes: "",
};

export default function AthletesPage() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [editingAthlete, setEditingAthlete] = useState(null);
  const [formData, setFormData] = useState(initialForm);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [saving, setSaving] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchAthletes();
  }, []);

  const fetchAthletes = async () => {
    try {
      const res = await api.get("/registrations");
      setAthletes(res.data);
    } catch (err) {
      console.error("Failed to fetch athletes:", err);
      alert("Failed to load athletes");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this athlete?")) return;
    try {
      await api.delete(`/registrations/${id}`);
      setAthletes((prev) => prev.filter((a) => a._id !== id));
    } catch (err) {
      console.error("Failed to delete:", err);
      alert("Failed to delete athlete");
    }
  };

  const openAddModal = () => {
    setEditingAthlete(null);
    setFormData(initialForm);
    setPhoto(null);
    setPhotoPreview(null);
    setShowModal(true);
  };

  const openEditModal = (athlete) => {
    setEditingAthlete(athlete);
    setFormData({
      fullName: athlete.fullName || "",
      email: athlete.email || "",
      phone: athlete.phone || "",
      dob: athlete.dob ? athlete.dob.split("T")[0] : "",
      height: athlete.height || "",
      position: athlete.position || "",
      program: athlete.program || "",
      notes: athlete.notes || "",
    });
    setPhoto(null);
    setPhotoPreview(athlete.photo ? `http://localhost:5000${athlete.photo}` : null);
    setShowModal(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });
      if (photo) {
        submitData.append("photo", photo);
      }

      if (editingAthlete) {
        await api.put(`/registrations/${editingAthlete._id}`, submitData);
      } else {
        await api.post("/registrations/admin", submitData);
      }

      setShowModal(false);
      await fetchAthletes();
    } catch (err) {
      console.error("Failed to save athlete:", err);
      alert("Failed to save athlete");
    } finally {
      setSaving(false);
    }
  };

  const filtered = filter === "all"
    ? athletes
    : athletes.filter((a) => a.status === filter);

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const inputClass = "w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading athletes...</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Manage Athletes</h2>
          <p className="text-gray-500">Add, edit, or remove athlete information</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white rounded-xl shadow-md px-4 py-2.5">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="focus:outline-none font-medium"
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <button
            onClick={openAddModal}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-700 hover:scale-105 transition flex items-center gap-2 shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add Athlete
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center bg-white rounded-2xl shadow-md py-16">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No athletes found</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((athlete) => (
            <div
              key={athlete._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              {/* Photo */}
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                {athlete.photo ? (
                  <img
                    src={`http://localhost:5000${athlete.photo}`}
                    alt={athlete.fullName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-300" />
                  </div>
                )}
                <div className={`absolute top-3 right-3 px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(athlete.status)}`}>
                  {athlete.status}
                </div>
              </div>

              {/* Details */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{athlete.fullName}</h3>
                <div className="space-y-2 mb-4">
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    <Target className="w-4 h-4 text-blue-500" />
                    {athlete.position}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    <Ruler className="w-4 h-4 text-blue-500" />
                    {athlete.height} cm
                  </p>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {athlete.dob ? new Date(athlete.dob).toLocaleDateString() : "N/A"}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    <Mail className="w-4 h-4 text-blue-500" />
                    {athlete.email}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    <Phone className="w-4 h-4 text-blue-500" />
                    {athlete.phone}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600 text-sm">
                    <BookOpen className="w-4 h-4 text-blue-500" />
                    {athlete.program}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-3 border-t">
                  <button
                    onClick={() => openEditModal(athlete)}
                    className="inline-flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700 transition"
                  >
                    <Pencil className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(athlete._id)}
                    className="inline-flex items-center gap-1 text-red-600 text-sm font-medium hover:text-red-700 transition ml-auto"
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

      {/* Add/Edit Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowModal(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl w-full max-w-2xl space-y-5 shadow-2xl my-8"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-2xl font-bold text-gray-900">
                {editingAthlete ? "Edit Athlete" : "Add New Athlete"}
              </h3>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Photo Upload */}
            <div className="flex flex-col items-center">
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative w-28 h-28 rounded-full border-4 border-dashed border-gray-300 hover:border-blue-500 flex items-center justify-center cursor-pointer transition group overflow-hidden"
              >
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="w-full h-full object-cover rounded-full" />
                ) : (
                  <div className="text-center">
                    <Image className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-500">Upload Photo</span>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                name="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className="hidden"
              />
              {photo && (
                <button
                  type="button"
                  onClick={() => {
                    setPhoto(null);
                    setPhotoPreview(editingAthlete?.photo ? `http://localhost:5000${editingAthlete.photo}` : null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="mt-2 text-sm text-red-500 hover:text-red-700"
                >
                  Remove Photo
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className={inputClass}
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className={inputClass}
              />
              <input
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                required
                className={inputClass}
              />
              <input
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="Height (cm)"
                required
                className={inputClass}
              />
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className={inputClass}
              >
                <option value="">Select Position</option>
                <option value="Point Guard">Point Guard</option>
                <option value="Shooting Guard">Shooting Guard</option>
                <option value="Small Forward">Small Forward</option>
                <option value="Power Forward">Power Forward</option>
                <option value="Center">Center</option>
              </select>
              <select
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className={`${inputClass} md:col-span-2`}
              >
                <option value="">Select Program</option>
                <option value="Private/Individual Training">Private/Individual Training</option>
                <option value="Group Training">Group Training</option>
                <option value="Team Training">Team Training</option>
                <option value="Camps & Clinics">Camps & Clinics</option>
                <option value="Shooting School">Shooting School</option>
              </select>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Additional Notes"
                rows="3"
                className={`${inputClass} resize-none md:col-span-2`}
              />
            </div>

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
                disabled={saving}
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              >
                {saving ? "Saving..." : editingAthlete ? "Save Changes" : "Add Athlete"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}