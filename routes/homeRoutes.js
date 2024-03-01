const express = require('express');
const router = express.Router();
const { homeController } = require('../controllers');

// Retrieve homepage for display
router.get('/', homeController.index);

// Retrieve dashboard for display


module.exports = router;