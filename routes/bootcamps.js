const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "List of all bootcamps" });
});

router.get("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Show a bootcamp with id: ${req.params.id}`
  });
});

router.post("/", (req, res) => {
  res.status(200).json({ success: true, message: "Create a bootcamp" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Update a bootcamp with id: ${req.params.id}`
  });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `Delete a bootcamp with id: ${req.params.id}`
  });
});

module.exports = router;
