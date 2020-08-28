const ErrorResponse = require('../utils/errorReponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc    Register User
// @route   GET /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true });
});
