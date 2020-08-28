const express = require('express');
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp, getBootcampsInRadius, bootcampPhotoUpload } = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');
const advancedResults = require('../middleware/advancedResults');

// INCLUDE OTHER RESOURCE ROUTERS
const courseRouter = require('./courses');

const router = express.Router();

const { protect, authorise } = require('../middleware/auth');

// RE-ROUTE INTO OTHER RESOURCE ROUTERS
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/:id/photo').put(protect, authorise('publisher', 'admin'), bootcampPhotoUpload);

router.route('/').get(advancedResults(Bootcamp, 'courses'), getBootcamps).post(protect, authorise('publisher', 'admin'), createBootcamp);
router.route('/:id').get(getBootcamp).put(protect, authorise('publisher', 'admin'), updateBootcamp).delete(protect, authorise('publisher', 'admin'), deleteBootcamp);

module.exports = router;
