const protect = require("../middleware/authMiddleware");

router.get("/my-tenants", protect, async (req, res) => {
  // Only logged-in users can access this
  res.json({ message: "Protected data for user " + req.user.name });
});
