import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ fullName: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitSuccess(true);
        setFormData({ fullName: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setError(data.message || "Failed to send message.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      desc: "Abuja Park, Nalaya State",
      bg: "bg-red-50 text-red-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      desc: "0780 908984",
      bg: "bg-blue-50 text-blue-500",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      desc: "solidskillssportsacademy@gmail.com",
      bg: "bg-green-50 text-green-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      desc: "Mon-Fri: 4PM-8PM\nSat: 9AM-6PM\nSun: 2PM-6PM",
      bg: "bg-purple-50 text-purple-500",
    },
  ];

  const inputClass = "w-full border border-gray-300 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition";

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 text-white py-32">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl text-yellow-100">
            Get in touch with our team for any questions
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Get in <span className="text-yellow-500">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We'd love to hear from you! Reach out to us through any of the channels below.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl ${info.bg} flex items-center justify-center mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{info.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-yellow-500 to-amber-500 shadow-xl rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>

            {submitSuccess && (
              <div className="mb-4 p-4 bg-white/95 text-green-800 rounded-xl flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 shrink-0" />
                Message sent successfully!
              </div>
            )}
            {error && (
              <div className="mb-4 p-4 bg-red-50 text-red-800 rounded-xl">{error}</div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                required
                value={formData.fullName}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
              />
              <textarea
                name="message"
                placeholder="Your Message *"
                required
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg"
              >
                {isSubmitting ? "Sending..." : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}