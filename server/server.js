import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./utils/db.js";
import authRoutes from "./routes/authRoutes.js";
import registrationRoutes from "./routes/registrationRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import donationRoutes from "./routes/donationRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import athleteRoutes from "./routes/athleteRoutes.js";
import User from "./models/User.js";
import Registration from "./models/Registration.js";
import Message from "./models/Message.js";
import Donation from "./models/Donation.js";
import Event from "./models/Event.js";
import bcrypt from "bcryptjs";
import { protect, adminOnly } from "./middleware/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

// CORS - allow all origins so the deployed frontend (any Vercel URL)
// and local dev servers can access the API
app.use(cors({
  origin: true,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/registrations", registrationRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/donations", donationRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/athletes", athleteRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Admin dashboard stats
app.get("/api/admin/stats", protect, adminOnly, async (req, res) => {
  try {
    const totalAthletes = await Registration.countDocuments({ status: "approved" });
    const pendingRegistrations = await Registration.countDocuments({ status: "pending" });
    const totalMessages = await Message.countDocuments();
    const upcomingEvents = await Event.countDocuments();
    const totalDonations = await Donation.countDocuments();

    res.json({
      totalAthletes,
      pendingRegistrations,
      totalMessages,
      upcomingEvents,
      totalDonations,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});

// Ensure admin exists
const ensureAdminExists = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || "admin@sossa.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    const existingAdmin = await User.findOne({ email: adminEmail, role: "admin" });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      const admin = new User({
        fullName: "Sossa Academy Admin",
        email: adminEmail,
        password: hashedPassword,
        role: "admin",
      });
      await admin.save();
      console.log("✅ Default admin created:", adminEmail);
    } else {
      console.log("✅ Admin already exists");
    }
  } catch (error) {
    console.error("❌ Error ensuring admin:", error);
  }
};

ensureAdminExists();

const PORT = process.env.PORT || 5000;

// Only start the server when running locally (not on Vercel serverless)
if (process.env.VERCEL !== "1") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(` http://localhost:${PORT}`);
  });
}

// Export for Vercel serverless
export default app;
