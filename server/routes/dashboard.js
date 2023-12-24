const express = require('express');
const router = express.Router();
const dashBoardController = require('../controllers/dashBoardController');


/**
 * DashBoard Routes
 */

router.get('/dashboard', dashBoardController.dashboard);

module.exports = router;