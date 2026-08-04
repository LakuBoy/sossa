import express from "express";
import { createDonation, getAllDonations } from "../controllers/donationController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/", createDonation);
router.get("/", protect, adminOnly, getAllDonations);

export default router;