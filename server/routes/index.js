const express = require('express');
const router = express.Router();
const Hero = require('../controllers/Hero');

/**
 * Routing App
 */
router.get('/', Hero.homepage);
router.get('/about', Hero.about);

module.exports = router;