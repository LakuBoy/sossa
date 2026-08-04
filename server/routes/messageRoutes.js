import express from "express";
import {
  createMessage,
  getAllMessages,
  deleteMessage,
} from "../controllers/messageController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

router.post("/", createMessage);
router.get("/", protect, adminOnly, getAllMessages);
router.delete("/:id", protect, adminOnly, deleteMessage);

export default router;