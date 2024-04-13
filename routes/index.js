const express = require('express');
const Controller = require('../controllers/homeController');
const router = express.Router();

router.get('/', Controller.getName); // Index page

module.exports = router;