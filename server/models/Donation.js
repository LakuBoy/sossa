import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      default: "Anonymous Donor",
    },
    email: {
      type: String,
      default: "anonymous@donor.com",
    },
    amount: {
      type: Number,
      required: true,
    },
    purpose: {
      type: String,
      enum: [
        "General Support",
        "Training & Events",
        "Equipment & Kits",
        "Youth Scholarships",
      ],
      default: "General Support",
    },
    paymentReference: {
      type: String,
      unique: true,
    },
    status: {
      type: String,
      enum: ["pending", "successful", "failed"],
      default: "pending",
    },
    gatewayResponse: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);