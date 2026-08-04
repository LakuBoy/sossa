import Donation from "../models/Donation.js";

// @desc    Create a donation (marked successful directly - no payment gateway)
// @route   POST /api/donations
export const createDonation = async (req, res) => {
  try {
    let { fullName, email, amount, purpose } = req.body;

    amount = Number(amount);

    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Invalid amount. Please enter a valid donation amount." });
    }

    const allowedPurposes = [
      "General Support",
      "Training & Events",
      "Equipment & Kits",
      "Youth Scholarships",
    ];

    if (!allowedPurposes.includes(purpose)) {
      purpose = "General Support";
    }

    const paymentReference = `DON-${Date.now()}`;

    // Create donation and mark as successful so it shows in the admin dashboard
    const donation = await Donation.create({
      fullName: fullName || "Anonymous Donor",
      email: email || "anonymous@donor.com",
      amount,
      purpose,
      paymentReference,
      status: "successful",
    });

    res.status(201).json({
      success: true,
      message: "Donation received successfully. Thank you for your support!",
      reference: paymentReference,
      donation,
    });
  } catch (error) {
    console.error("DONATION ERROR:", error);
    res.status(500).json({ message: "Failed to process donation", error: error.message });
  }
};

// @desc    Get all donations (admin)
// @route   GET /api/donations
export const getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch donations", error: error.message });
  }
};