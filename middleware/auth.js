const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorReponse');
const User = require('../models/User');

// Protect Routes:
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  //  else if (req.cookie.token) {
  //   token = req.cookies.token;
  // }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse('Not authorised to access this route', 401));
  }

  // if it does...
  try {
    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    req.user = await User.findById(decoded.id); //currently logged in user

    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorised to access this route', 401));
  }
});

// Grant access to specific roles
exports.authorise = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new ErrorResponse(`User role ${req.user.role} is not authorised to access this route`, 403));
    }
    next();
  };
};
