import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import {
  Users,
  UserPlus,
  MessageSquare,
  CalendarDays,
  Heart,
  CalendarPlus,
  UserCheck,
  MessagesSquare,
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");
  const adminUser = JSON.parse(localStorage.getItem("adminUser") || "{}");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await api.get("/admin/stats");
      setStats(res.data);
    } catch (err) {
      console.error("Failed to fetch stats:", err);
      if (err.response?.status === 401) {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        navigate("/admin/login");
      }
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      label: "Total Athletes",
      value: stats?.totalAthletes || 0,
      icon: <Users className="w-6 h-6" />,
      color: "bg-blue-500",
      link: "/admin/athletes",
    },
    {
      label: "Pending Registrations",
      value: stats?.pendingRegistrations || 0,
      icon: <UserPlus className="w-6 h-6" />,
      color: "bg-yellow-500",
      link: "/admin/athletes",
    },
    {
      label: "Total Messages",
      value: stats?.totalMessages || 0,
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-green-500",
      link: "/admin/messages",
    },
    {
      label: "Upcoming Events",
      value: stats?.upcomingEvents || 0,
      icon: <CalendarDays className="w-6 h-6" />,
      color: "bg-purple-500",
      link: "/admin/events",
    },
    {
      label: "Total Donations",
      value: stats?.totalDonations || 0,
      icon: <Heart className="w-6 h-6" />,
      color: "bg-red-500",
      link: "/admin/donations",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 overflow-x-hidden">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Welcome, {adminUser.fullName || "Admin"}
        </h2>
        <p className="text-gray-500 mt-2">Here's what's happening at SOSSA</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-10">
        {statCards.map((card, idx) => (
          <Link
            key={idx}
            to={card.link}
            className="group bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl ${card.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
              {card.icon}
            </div>
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            <p className="text-sm text-gray-500 mt-1">{card.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/admin/donations"
            className="group bg-red-50 text-red-700 p-5 rounded-xl hover:bg-red-100 transition text-center"
          >
            <Heart className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition" />
            <span className="font-semibold">View Donations</span>
          </Link>
          <Link
            to="/admin/events"
            className="group bg-purple-50 text-purple-700 p-5 rounded-xl hover:bg-purple-100 transition text-center"
          >
            <CalendarPlus className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition" />
            <span className="font-semibold">Manage Events</span>
          </Link>
          <Link
            to="/admin/athletes"
            className="group bg-blue-50 text-blue-700 p-5 rounded-xl hover:bg-blue-100 transition text-center"
          >
            <UserCheck className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition" />
            <span className="font-semibold">Manage Athletes</span>
          </Link>
          <Link
            to="/admin/messages"
            className="group bg-green-50 text-green-700 p-5 rounded-xl hover:bg-green-100 transition text-center"
          >
            <MessagesSquare className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition" />
            <span className="font-semibold">Read Messages</span>
          </Link>
        </div>
      </div>
    </div>
  );
}