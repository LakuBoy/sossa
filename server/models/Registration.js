import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    program: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      default: "",
    },
    photo: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Registration", registrationSchema);