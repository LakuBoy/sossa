import { useEffect, useState } from "react";
import api from "../api/axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Search, Filter, Heart } from "lucide-react";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DonationsPage = () => {
  const [donations, setDonations] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterStatus, setFilterStatus] = useState("all");
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchDonations();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [donations, filterStatus, sortField, sortOrder, searchQuery]);

  const fetchDonations = async () => {
    try {
      const res = await api.get("/donations");
      setDonations(res.data);
    } catch (error) {
      console.error("Failed to fetch donations:", error);
      alert("Unauthorized or failed to load donations");
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let temp = [...donations];

    if (filterStatus !== "all") temp = temp.filter((d) => d.status === filterStatus);

    if (searchQuery.trim() !== "")
      temp = temp.filter((d) =>
        d.fullName?.toLowerCase().includes(searchQuery.toLowerCase())
      );

    temp.sort((a, b) => {
      if (sortField === "amount") return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount;
      if (sortField === "createdAt")
        return sortOrder === "asc"
          ? new Date(a.createdAt) - new Date(b.createdAt)
          : new Date(b.createdAt) - new Date(a.createdAt);
      return 0;
    });

    setFiltered(temp);
  };

  // Prepare chart data
  const successfulDonations = donations.filter((d) => d.status === "successful");
  const totalAmount = successfulDonations.reduce((acc, d) => acc + d.amount, 0);
  const chartData = {
    labels: ["General Support", "Training & Events", "Equipment & Kits", "Youth Scholarships"],
    datasets: [
      {
        label: "Total Donations (UGX)",
        data: [
          successfulDonations.filter((d) => d.purpose === "General Support").reduce((acc, d) => acc + d.amount, 0),
          successfulDonations.filter((d) => d.purpose === "Training & Events").reduce((acc, d) => acc + d.amount, 0),
          successfulDonations.filter((d) => d.purpose === "Equipment & Kits").reduce((acc, d) => acc + d.amount, 0),
          successfulDonations.filter((d) => d.purpose === "Youth Scholarships").reduce((acc, d) => acc + d.amount, 0),
        ],
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Donations by Purpose", font: { size: 18, weight: "bold" } },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: "rgba(0,0,0,0.05)" },
      },
    },
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "successful":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading donations...</p>
      </div>
    );

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Donations Dashboard</h2>
        <p className="text-gray-500">Track and analyze all donations received</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 font-medium">Total Donations</p>
          </div>
          <p className="text-3xl font-bold text-gray-900">{donations.length}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-50 text-green-500 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 font-medium">Successful</p>
          </div>
          <p className="text-3xl font-bold text-gray-900">{successfulDonations.length}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <p className="text-sm text-gray-500 font-medium">Total Amount (UGX)</p>
          </div>
          <p className="text-3xl font-bold text-gray-900">{totalAmount.toLocaleString()}</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-4 mb-8 items-center bg-white rounded-2xl shadow-md p-4">
        <div className="flex items-center flex-1 min-w-[200px]">
          <Search className="w-5 h-5 text-gray-400 ml-3" />
          <input
            type="text"
            placeholder="Search donor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2.5 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-gray-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="successful">Successful</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="createdAt">Sort by Date</option>
            <option value="amount">Sort by Amount</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="mb-8 bg-white p-6 md:p-8 rounded-2xl shadow-md">
        <Bar data={chartData} options={chartOptions} />
      </div>

      {/* Donations Table */}
      <div className="overflow-x-auto bg-white rounded-2xl shadow-md">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-4 border-b text-sm font-semibold text-gray-600">Date</th>
              <th className="p-4 border-b text-sm font-semibold text-gray-600">Donor</th>
              <th className="p-4 border-b text-sm font-semibold text-gray-600">Amount (UGX)</th>
              <th className="p-4 border-b text-sm font-semibold text-gray-600">Purpose</th>
              <th className="p-4 border-b text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d._id} className="hover:bg-gray-50 transition">
                <td className="p-4 border-b text-gray-600">{new Date(d.createdAt).toLocaleDateString()}</td>
                <td className="p-4 border-b font-medium text-gray-900">{d.fullName || "Anonymous"}</td>
                <td className="p-4 border-b text-gray-900 font-semibold">{d.amount.toLocaleString()}</td>
                <td className="p-4 border-b text-gray-600">{d.purpose}</td>
                <td className="p-4 border-b">
                  <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(d.status)}`}>
                    {d.status}
                  </span>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="5" className="p-8 text-center text-gray-500">
                  No donations match your filters
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DonationsPage;