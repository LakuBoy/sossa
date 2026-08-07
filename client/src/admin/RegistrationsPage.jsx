import { useEffect, useState } from "react";
import api from "../api/axios";
import { Check, X, Trash2, Filter, ClipboardList } from "lucide-react";

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      const res = await api.get("/registrations");
      setRegistrations(Array.isArray(res.data) ? res.data : res.data.registrations || []);
    } catch (err) {
      console.error("Failed to fetch registrations:", err);
      alert(err.response?.data?.message || "Failed to load registrations");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/registrations/${id}/status`, { status });
      setRegistrations((prev) =>
        prev.map((r) => (r._id === id ? { ...r, status } : r))
      );
    } catch (err) {
      console.error("Failed to update status:", err);
      alert(err.response?.data?.message || "Failed to update status");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this registration?")) return;
    try {
      await api.delete(`/registrations/${id}`);
      setRegistrations((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Failed to delete:", err);
      alert(err.response?.data?.message || "Failed to delete registration");
    }
  };

  const filtered = filter === "all"
    ? registrations
    : registrations.filter((r) => r.status === filter);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading registrations...</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Registrations</h2>
          <p className="text-gray-500">Review and manage player registrations</p>
        </div>
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
      </div>

      {filtered.length === 0 ? (
        <div className="text-center bg-white rounded-2xl shadow-md py-16">
          <ClipboardList className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No registrations found</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-4 border-b text-sm font-semibold text-gray-600">Name</th>
                <th className="p-4 border-b text-sm font-semibold text-gray-600">Email</th>
                <th className="p-4 border-b text-sm font-semibold text-gray-600">Phone</th>
                <th className="p-4 border-b text-sm font-semibold text-gray-600">Position</th>
                <th className="p-4 border-b text-sm font-semibold text-gray-600">Program</th>
                <th className="p-4 border-b text-sm font-semibold text-gray-600">Status</th>
                <th className="p-4 border-b text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((reg) => (
                <tr key={reg._id} className="hover:bg-gray-50 transition">
                  <td className="p-4 border-b font-medium text-gray-900">{reg.fullName}</td>
                  <td className="p-4 border-b text-gray-600">{reg.email}</td>
                  <td className="p-4 border-b text-gray-600">{reg.phone}</td>
                  <td className="p-4 border-b text-gray-600">{reg.position}</td>
                  <td className="p-4 border-b text-gray-600">{reg.program}</td>
                  <td className="p-4 border-b">
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(reg.status || "pending")}`}>
                      {reg.status || "pending"}
                    </span>
                  </td>
                  <td className="p-4 border-b">
                    <div className="flex gap-2">
                      {reg.status !== "approved" && (
                        <button
                          onClick={() => updateStatus(reg._id, "approved")}
                          className="inline-flex items-center gap-1 text-green-600 text-sm font-medium hover:text-green-700 transition"
                          title="Approve"
                        >
                          <Check className="w-4 h-4" />
                          Approve
                        </button>
                      )}
                      {reg.status !== "rejected" && (
                        <button
                          onClick={() => updateStatus(reg._id, "rejected")}
                          className="inline-flex items-center gap-1 text-red-600 text-sm font-medium hover:text-red-700 transition"
                          title="Reject"
                        >
                          <X className="w-4 h-4" />
                          Reject
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(reg._id)}
                        className="inline-flex items-center gap-1 text-gray-500 text-sm font-medium hover:text-gray-700 transition"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}