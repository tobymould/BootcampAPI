const express = require('express');
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp, getBootcampsInRadius, bootcampPhotoUpload } = require('../controllers/bootcamps');

const Bootcamp = require('../models/Bootcamp');

// INCLUDE OTHER RESOURCE ROUTERS
const courseRouter = require('./courses');
const reviewRouter = require('./reviews');

const router = express.Router();

const advancedResults = require('../middleware/advancedResults');
const { protect, authorise } = require('../middleware/auth');

// RE-ROUTE INTO OTHER RESOURCE ROUTERS
router.use('/:bootcampId/courses', courseRouter);
router.use('/:bootcampId/reviews', reviewRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/:id/photo').put(protect, authorise('publisher', 'admin'), bootcampPhotoUpload);

router.route('/').get(advancedResults(Bootcamp, 'courses'), getBootcamps).post(protect, authorise('publisher', 'admin'), createBootcamp);
router.route('/:id').get(getBootcamp).put(protect, authorise('publisher', 'admin'), updateBootcamp).delete(protect, authorise('publisher', 'admin'), deleteBootcamp);

module.exports = router;
