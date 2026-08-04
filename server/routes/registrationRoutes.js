import express from "express";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {
  createRegistration,
  getAllRegistrations,
  updateRegistrationStatus,
  updateRegistration,
  createRegistrationByAdmin,
  deleteRegistration,
} from "../controllers/registrationController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|webp/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error("Only image files (jpeg, jpg, png, webp) are allowed!"));
    }
  },
});

const router = express.Router();

router.post("/", upload.single("photo"), createRegistration);
router.get("/", protect, adminOnly, getAllRegistrations);
router.post("/admin", protect, adminOnly, upload.single("photo"), createRegistrationByAdmin);
router.patch("/:id/status", protect, adminOnly, updateRegistrationStatus);
router.put("/:id", protect, adminOnly, upload.single("photo"), updateRegistration);
router.delete("/:id", protect, adminOnly, deleteRegistration);

export default router;