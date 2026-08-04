import { useEffect, useState } from "react";
import api from "../api/axios";
import { Trash2, Mail, User, MessageSquare } from "lucide-react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await api.get("/messages");
      setMessages(res.data);
    } catch (err) {
      console.error("Failed to fetch messages:", err);
      alert("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this message?")) return;
    try {
      await api.delete(`/messages/${id}`);
      setMessages((prev) => prev.filter((m) => m._id !== id));
    } catch (err) {
      console.error("Failed to delete:", err);
      alert("Failed to delete message");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Messages</h2>
        <p className="text-gray-500">Messages from visitors and parents</p>
      </div>

      {messages.length === 0 ? (
        <div className="text-center bg-white rounded-2xl shadow-md py-16">
          <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">No messages yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{msg.fullName}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5" />
                      {msg.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                    {new Date(msg.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="inline-flex items-center gap-1 text-red-600 text-sm font-medium hover:text-red-700 transition"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4">
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}