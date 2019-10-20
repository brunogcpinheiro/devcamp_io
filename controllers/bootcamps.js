const Bootcamp = require("../models/Bootcamp");

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
const getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: "List of all bootcamps" });
};

// @desc      Get single bootcamp
// @route     GET /api/v1/bootcamps/:id
// @access    Public
const getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Show a bootcamp with id: ${req.params.id}`
  });
};

// @desc      Create new bootcamp
// @route     POST /api/v1/bootcamps
// @access    Private
const createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc      Update bootcamp
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
const updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Update a bootcamp with id: ${req.params.id}`
  });
};

// @desc      Delete bootcamp
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
const deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `Delete a bootcamp with id: ${req.params.id}`
  });
};

module.exports = {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
};
