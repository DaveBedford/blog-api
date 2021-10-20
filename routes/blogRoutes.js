const express = require('express');
const router = express.Router(); 
const inventoryController = require('../controllers/blogController');

router.get('/', inventoryController.inventory_index);


module.exports = router;