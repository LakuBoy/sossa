import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Calendar, Ruler, Users, BookOpen, MessageSquare, ArrowRight, Upload, Image } from "lucide-react";
import DialogBox from "../components/DialogBox";

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    height: "",
    position: "",
    program: "",
    notes: "",
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

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
    setLoading(true);

    try {
      const submitData = new FormData();
      Object.keys(formData).forEach((key) => {
        submitData.append(key, formData[key]);
      });
      if (photo) {
        submitData.append("photo", photo);
      }

      const response = await fetch("http://localhost:5000/api/registrations", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmittedName(formData.fullName);
        setIsDialogOpen(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dob: "",
          height: "",
          position: "",
          program: "",
          notes: "",
        });
        setPhoto(null);
        setPhotoPreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        alert(`Failed to register: ${data.message}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    navigate("/");
  };

  const inputClass = "w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our Basketball Academy
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Take the first step towards becoming a better player.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Registration <span className="text-red-500">Form</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Fill in your details below and our team will contact you with more information.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-3xl p-8 md:p-12 space-y-6 border-t-4 border-blue-500"
          >
            {/* Photo Upload */}
            <div className="flex flex-col items-center mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Player Photo
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                className="relative w-32 h-32 rounded-full border-4 border-dashed border-gray-300 hover:border-blue-500 flex items-center justify-center cursor-pointer transition group overflow-hidden"
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
                    setPhotoPreview(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="mt-2 text-sm text-red-500 hover:text-red-700"
                >
                  Remove Photo
                </button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="flex items-center gap-2 font-medium mb-2 text-gray-800">
                  <User className="w-4 h-4 text-blue-600" /> Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 font-medium mb-2 text-gray-800">
                  <Mail className="w-4 h-4 text-blue-600" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 font-medium mb-2 text-gray-800">
                  <Phone className="w-4 h-4 text-blue-600" /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="+256 700 000 000"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="flex items-center gap-2 font-medium mb-2 text-gray-800">
                  <Calendar className="w-4 h-4 text-blue-600" /> Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              {/* Height */}
              <div>
                <label className="flex items-center gap-2 font-medium mb-2 text-gray-800">
                  <Ruler className="w-4 h-4 text-blue-600" /> Height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="e.g., 175"
                  required
                  className={inputClass}
                />
              </div>

              {/* Position */}
              <div>
                <label className="flex items-center gap-2 font-medium mb-2 text-gray-800">
                  <Users className="w-4 h-4 text-blue-600" /> Position
                </label>
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
              </div>

              {/* Program Selection */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 font-medium mb-2 text-gray-800">
                  <BookOpen className="w-4 h-4 text-blue-600" /> Select Program
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Choose a program</option>
                  <option value="Private/Individual Training">Private/Individual Training</option>
                  <option value="Group Training">Group Training</option>
                  <option value="Team Training">Team Training</option>
                  <option value="Camps & Clinics">Camps & Clinics</option>
                  <option value="Shooting School">Shooting School</option>
                </select>
              </div>

              {/* Notes */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-2 font-medium mb-2 text-gray-800">
                  <MessageSquare className="w-4 h-4 text-blue-600" /> Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any medical info, preferences, or questions..."
                  className={`${inputClass} resize-none`}
                  rows="4"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? "Submitting..." : (
                <>
                  Register Now <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Dialog */}
      <DialogBox
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        title="🎉 Registration Successful!"
        message={`Thank you ${submittedName || "Player"}, we'll contact you soon with more details.`}
        buttonText="Close"
      />
    </div>
  );
}