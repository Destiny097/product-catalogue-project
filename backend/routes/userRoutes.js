import express from "express";
import User from "../models/User.js";
import { auth } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get logged-in user profile
router.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// Update profile
router.put("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.address = req.body.address || user.address;

    await user.save();
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      address: user.address,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
});

export default router;
