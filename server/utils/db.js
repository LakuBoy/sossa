import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    // Only exit in local dev; on Vercel serverless, exiting crashes the function
    if (process.env.VERCEL !== "1") {
      process.exit(1);
    }
  }
};
