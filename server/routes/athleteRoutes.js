import express from "express";
import Registration from "../models/Registration.js";

const router = express.Router();

// @desc    Get all approved athletes (public)
// @route   GET /api/athletes
router.get("/", async (req, res) => {
  try {
    const athletes = await Registration.find({ status: "approved" })
      .select("fullName position program photo height dob createdAt")
      .sort({ createdAt: -1 });
    res.json(athletes);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch athletes", error: error.message });
  }
});

export default router;