const express = require('express');
const router = express.Router();
const { homeController } = require('../controllers');

// Retrieve homepage for display
router.get('/', homeController.index);

// Retrieve dashboard for display
router.get('/', homeController.dashboard);

// Retrieve login page for display
router.get('/', homeController.login);

router.get('/', homeController.signup);


module.exports = router;