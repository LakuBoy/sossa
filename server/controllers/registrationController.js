import Registration from "../models/Registration.js";

// @desc    Create a new registration (with image upload)
// @route   POST /api/registrations
export const createRegistration = async (req, res) => {
  try {
    const { fullName, email, phone, dob, height, position, program, notes } = req.body;

    if (!fullName || !email || !phone || !dob || !height || !position || !program) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const photo = req.file ? `/uploads/${req.file.filename}` : "";

    const registration = await Registration.create({
      fullName,
      email,
      phone,
      dob,
      height,
      position,
      program,
      notes: notes || "",
      photo,
    });

    res.status(201).json({
      success: true,
      message: "Registration submitted successfully",
      registration,
    });
  } catch (error) {
    console.error("REGISTRATION ERROR:", error);
    res.status(500).json({ message: "Failed to submit registration", error: error.message });
  }
};

// @desc    Get all registrations (admin)
// @route   GET /api/registrations
export const getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ createdAt: -1 });
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch registrations", error: error.message });
  }
};

// @desc    Update registration status (admin)
// @route   PATCH /api/registrations/:id/status
export const updateRegistrationStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["pending", "approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const registration = await Registration.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    res.json(registration);
  } catch (error) {
    res.status(500).json({ message: "Failed to update registration", error: error.message });
  }
};

// @desc    Update full athlete information (admin)
// @route   PUT /api/registrations/:id
export const updateRegistration = async (req, res) => {
  try {
    const { fullName, email, phone, dob, height, position, program, notes } = req.body;

    const updateData = {};
    if (fullName !== undefined) updateData.fullName = fullName;
    if (email !== undefined) updateData.email = email;
    if (phone !== undefined) updateData.phone = phone;
    if (dob !== undefined) updateData.dob = dob;
    if (height !== undefined) updateData.height = height;
    if (position !== undefined) updateData.position = position;
    if (program !== undefined) updateData.program = program;
    if (notes !== undefined) updateData.notes = notes;
    if (req.file) updateData.photo = `/uploads/${req.file.filename}`;

    const registration = await Registration.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    res.json(registration);
  } catch (error) {
    console.error("UPDATE REGISTRATION ERROR:", error);
    res.status(500).json({ message: "Failed to update registration", error: error.message });
  }
};

// @desc    Create a new athlete directly by admin
// @route   POST /api/registrations/admin
export const createRegistrationByAdmin = async (req, res) => {
  try {
    const { fullName, email, phone, dob, height, position, program, notes, status } = req.body;

    if (!fullName || !email || !phone || !dob || !height || !position || !program) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const photo = req.file ? `/uploads/${req.file.filename}` : "";

    const registration = await Registration.create({
      fullName,
      email,
      phone,
      dob,
      height,
      position,
      program,
      notes: notes || "",
      photo,
      status: status || "approved",
    });

    res.status(201).json({
      success: true,
      message: "Athlete created successfully",
      registration,
    });
  } catch (error) {
    console.error("ADMIN CREATE REGISTRATION ERROR:", error);
    res.status(500).json({ message: "Failed to create athlete", error: error.message });
  }
};

// @desc    Delete a registration (admin)
// @route   DELETE /api/registrations/:id
export const deleteRegistration = async (req, res) => {
  try {
    const registration = await Registration.findByIdAndDelete(req.params.id);

    if (!registration) {
      return res.status(404).json({ message: "Registration not found" });
    }

    res.json({ message: "Registration deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete registration", error: error.message });
  }
};