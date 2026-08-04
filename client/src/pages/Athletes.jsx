import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Star, Target, Award, Users, Ruler, Calendar, Search, Filter, X } from "lucide-react";
import api from "../api/axios";

export default function Athletes() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [programFilter, setProgramFilter] = useState("all");

  useEffect(() => {
    const fetchAthletes = async () => {
      try {
        const res = await api.get("/athletes");
        setAthletes(res.data);
      } catch (error) {
        console.error("Failed to fetch athletes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAthletes();
  }, []);

  const programOptions = [
    "Private/Individual Training",
    "Group Training",
    "Team Training",
    "Camps & Clinics",
    "Shooting School",
  ];

  const filteredAthletes = athletes.filter((athlete) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      athlete.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (athlete.position && athlete.position.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesProgram =
      programFilter === "all" || athlete.program === programFilter;
    return matchesSearch && matchesProgram;
  });

  const hasActiveFilters = searchQuery.trim() !== "" || programFilter !== "all";

  const clearFilters = () => {
    setSearchQuery("");
    setProgramFilter("all");
  };

  const stats = [
    { value: "100%", label: "Scholarship Success Rate" },
    { value: "50+", label: "Athletes Trained" },
    { value: "3+", label: "Countries Reached" },
    { value: "10+", label: "Years of Experience" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-500 text-white py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Athletes</h1>
          <p className="text-xl md:text-2xl text-orange-100">
            The future stars of basketball
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-black text-orange-500 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athletes Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Athlete <span className="text-orange-500">Highlights</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet our approved athletes who are working hard to achieve their dreams.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-gray-100">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name or position..."
                    className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                      aria-label="Clear search"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>

                {/* Program Filter */}
                <div className="relative md:w-72">
                  <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={programFilter}
                    onChange={(e) => setProgramFilter(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition appearance-none bg-white cursor-pointer"
                  >
                    <option value="all">All Programs</option>
                    {programOptions.map((prog) => (
                      <option key={prog} value={prog}>
                        {prog}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active Filters / Clear */}
              {hasActiveFilters && (
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    Showing {filteredAthletes.length} athlete{filteredAthletes.length !== 1 ? "s" : ""}
                  </p>
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 hover:text-orange-700 transition"
                  >
                    <X className="w-4 h-4" />
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {loading ? (
            <p className="text-center text-gray-500 text-lg">Loading athletes...</p>
          ) : filteredAthletes.length === 0 ? (
            <div className="text-center bg-gray-50 rounded-2xl py-16">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                {hasActiveFilters
                  ? "No athletes match your search criteria."
                  : "No approved athletes yet. Register to be the first!"}
              </p>
              {hasActiveFilters ? (
                <button
                  onClick={clearFilters}
                  className="inline-block mt-6 bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
                >
                  Clear Filters
                </button>
              ) : (
                <Link
                  to="/register"
                  className="inline-block mt-6 bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
                >
                  Register Now
                </Link>
              )}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAthletes.map((athlete) => (
                <div
                  key={athlete._id}
                  className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="relative h-72 overflow-hidden bg-gray-100">
                    {athlete.photo ? (
                      <img
                        src={`http://localhost:5000${athlete.photo}`}
                        alt={athlete.fullName}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="w-20 h-20 text-gray-300" />
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                      {athlete.position}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{athlete.fullName}</h3>
                    <div className="space-y-2 mb-4 flex-1">
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Target className="w-4 h-4 text-orange-500" />
                        <span className="font-medium">Program:</span> {athlete.program}
                      </p>
                      <p className="flex items-center gap-2 text-gray-600 text-sm">
                        <Ruler className="w-4 h-4 text-orange-500" />
                        <span className="font-medium">Height:</span> {athlete.height} cm
                      </p>
                      {athlete.dob && (
                        <p className="flex items-center gap-2 text-gray-600 text-sm">
                          <Calendar className="w-4 h-4 text-orange-500" />
                          <span className="font-medium">DOB:</span>{" "}
                          {new Date(athlete.dob).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange-100 text-orange-500 mb-8">
            <Trophy className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Scholarship <span className="text-orange-500">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            We don't just offer opportunities — we create pathways to success
            with a 100% rate of securing scholarships for our athletes. Our
            dedicated approach ensures your child's talent gets the recognition
            and support it deserves both locally and internationally.
          </p>
          <Link
            to="/register"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-orange-300/40 transition-all duration-300 inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}