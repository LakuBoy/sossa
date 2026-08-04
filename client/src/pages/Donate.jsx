import { useState } from "react";
import { CheckCircle, Heart, Shield, Zap, Users } from "lucide-react";
import api from "../api/axios";

export default function Donate() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    amount: "",
    purpose: "General Support",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!form.amount || Number(form.amount) <= 0) {
        setError("Please enter a valid donation amount.");
        return;
      }

      const payload = {
        fullName: form.fullName || "Anonymous Donor",
        email: form.email || "anonymous@donor.com",
        amount: Number(form.amount),
        purpose: form.purpose,
      };

      const res = await api.post("/donations", payload);

      if (res.data.success) {
        setSubmitSuccess(true);
        setForm({
          fullName: "",
          email: "",
          amount: "",
          purpose: "General Support",
        });
        setTimeout(() => setSubmitSuccess(false), 6000);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to process donation. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const quickAmounts = [10000, 25000, 50000, 100000, 250000, 500000];

  const impactPoints = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Training Equipment",
      desc: "Funds go towards quality basketballs, training gear, and facility maintenance.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Player Development",
      desc: "Support coaching fees, tournament participation, and player development programs.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Youth Scholarships",
      desc: "Help talented young athletes access training they couldn't otherwise afford.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-slate-900 text-white py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium">Make a Difference</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Support Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Academy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Your donation helps young athletes grow, train, and succeed.
          </p>
        </div>
      </section>

      {/* FORM + IMPACT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Donation Form */}
            <div className="md:col-span-3">
              <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 border-t-4 border-red-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Make a <span className="text-red-500">Donation</span>
                </h2>

                {/* SUCCESS */}
                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-xl flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 shrink-0" />
                    Donation received successfully. Thank you for your support!
                  </div>
                )}

                {/* ERROR */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FULL NAME */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      className="w-full border rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-red-500 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-red-500 outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* AMOUNT */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Amount (UGX)
                    </label>
                    <input
                      type="number"
                      name="amount"
                      required
                      min="1"
                      value={form.amount}
                      onChange={handleChange}
                      className="w-full border rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-red-500 outline-none transition"
                      placeholder="e.g. 50000"
                    />
                    {/* Quick amounts */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {quickAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setForm({ ...form, amount: String(amount) })}
                          className={`px-4 py-2 rounded-lg text-sm font-semibold border transition ${
                            Number(form.amount) === amount
                              ? "bg-red-500 text-white border-red-500"
                              : "bg-gray-50 text-gray-700 border-gray-200 hover:border-red-300 hover:text-red-500"
                          }`}
                        >
                          {amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* DONATION TYPE */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Donation Purpose
                    </label>
                    <select
                      name="purpose"
                      value={form.purpose}
                      onChange={handleChange}
                      className="w-full border rounded-xl px-5 py-3.5 focus:ring-2 focus:ring-red-500 outline-none transition"
                    >
                      <option value="General Support">General Support</option>
                      <option value="Training & Events">Training & Events</option>
                      <option value="Equipment & Kits">Equipment & Kits</option>
                      <option value="Youth Scholarships">Youth Scholarships</option>
                    </select>
                  </div>

                  {/* DONATE BUTTON */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl font-bold hover:scale-[1.02] transition flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg"
                  >
                    <Heart className="w-5 h-5" />
                    {loading ? "Processing..." : "Donate Now"}
                  </button>
                </form>
              </div>
            </div>

            {/* Impact Section */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-3">Your Impact</h3>
                <p className="text-white/90 leading-relaxed">
                  Every donation, no matter the size, helps us provide quality
                  basketball training and development opportunities to young athletes.
                </p>
              </div>

              {impactPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-4">
                    {point.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{point.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.desc}</p>
                </div>
              ))}

              <div className="bg-gray-900 text-white rounded-2xl p-6">
                <p className="text-sm text-gray-400 mb-2">For large donations or partnerships:</p>
                <p className="font-semibold">📧 solidskillssportsacademy@gmail.com</p>
                <p className="font-semibold">📞 0780 908984</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}