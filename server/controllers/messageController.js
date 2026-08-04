import Message from "../models/Message.js";

// @desc    Create a new message
// @route   POST /api/messages
export const createMessage = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    if (!fullName || !email || !message) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const newMessage = await Message.create({
      fullName,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.error("MESSAGE ERROR:", error);
    res.status(500).json({ message: "Failed to send message", error: error.message });
  }
};

// @desc    Get all messages (admin)
// @route   GET /api/messages
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch messages", error: error.message });
  }
};

// @desc    Delete a message (admin)
// @route   DELETE /api/messages/:id
export const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete message", error: error.message });
  }
};