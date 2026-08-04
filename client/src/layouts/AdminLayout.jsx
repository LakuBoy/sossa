import { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  UserCheck,
  HandCoins,
  CalendarPlus,
  ClipboardList,
  MessagesSquare,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" />, path: "/admin" },
    { label: "Athletes", icon: <UserCheck className="w-5 h-5" />, path: "/admin/athletes" },
    { label: "Donations", icon: <HandCoins className="w-5 h-5" />, path: "/admin/donations" },
    { label: "Events", icon: <CalendarPlus className="w-5 h-5" />, path: "/admin/events" },
    { label: "Registrations", icon: <ClipboardList className="w-5 h-5" />, path: "/admin/registrations" },
    { label: "Messages", icon: <MessagesSquare className="w-5 h-5" />, path: "/admin/messages" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/admin/login");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - Desktop */}
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:flex flex-col shrink-0 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-10">
          <img src="/icon.png" alt="SOSSA" className="h-12 w-12 rounded-full ring-2 ring-red-500" />
          <div>
            <h1 className="text-xl font-black">SOSSA</h1>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
        <nav className="space-y-1.5 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                isActive(item.path)
                  ? "bg-red-500 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-600 hover:text-white transition w-full text-left mt-4"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-gray-900 text-white flex items-center justify-between px-4 h-16">
        <div className="flex items-center gap-2">
          <img src="/icon.png" alt="SOSSA" className="h-9 w-9 rounded-full ring-2 ring-red-500" />
          <span className="font-black">SOSSA Admin</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-800 transition"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/50" onClick={() => setIsSidebarOpen(false)}>
          <div
            className="fixed top-16 left-0 bottom-0 w-64 bg-gray-900 text-white p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-1.5 flex-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive(item.path)
                      ? "bg-red-500 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </nav>
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-300 hover:bg-red-600 hover:text-white transition w-full text-left"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 md:pt-0 pt-16 overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
}