import mongoose from "mongoose";

// Validate MongoDB URI at startup — if missing, the serverless function
// will log a clear error instead of a cryptic Mongoose buffering timeout
if (!process.env.MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in environment variables.");
}

export const connectDB = async () => {
  // Reuse existing connection. On Vercel serverless, the function instance
  // is frozen and re-used, so we must not reconnect on every invocation.
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 15000,
      socketTimeoutMS: 45000,
      bufferTimeoutMS: 30000,
      maxPoolSize: 5,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Only exit in local dev; on Vercel serverless, exiting crashes the function
    if (process.env.VERCEL !== "1") {
      process.exit(1);
    }
  }
};