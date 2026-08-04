import Event from "../models/Event.js";

// @desc    Get all events
// @route   GET /api/events
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error: error.message });
  }
};

// @desc    Create a new event (admin)
// @route   POST /api/events
export const createEvent = async (req, res) => {
  try {
    const { title, date, location, description } = req.body;

    if (!title || !date || !location || !description) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const event = await Event.create({
      title,
      date,
      location,
      description,
    });

    res.status(201).json(event);
  } catch (error) {
    console.error("EVENT ERROR:", error);
    res.status(500).json({ message: "Failed to create event", error: error.message });
  }
};

// @desc    Update an event (admin)
// @route   PUT /api/events/:id
export const updateEvent = async (req, res) => {
  try {
    const { title, date, location, description } = req.body;

    const event = await Event.findByIdAndUpdate(
      req.params.id,
      { title, date, location, description },
      { new: true, runValidators: true }
    );

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Failed to update event", error: error.message });
  }
};

// @desc    Delete an event (admin)
// @route   DELETE /api/events/:id
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete event", error: error.message });
  }
};