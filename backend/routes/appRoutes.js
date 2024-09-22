const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');
const requireAuth = require('../middleware/requireAuth');
const upload = require('../middleware/upload'); 
require('dotenv').config();

// Public routes
router.get('/section/:category', appController.section_get);
router.get('/shopby/:type', appController.shopby_get);
router.get('/shopbybrand/:brand', appController.shopbybrand_get);
router.get('/search', appController.search_get);
router.get('/product/:id', appController.product_get);

// Protected routes
router.use(requireAuth);

// Add upload middleware to handle image uploads in submit post route
router.post('/submit', upload.single('file'), appController.submit_post);

// Other protected routes
router.delete('/myads/:id', appController.delete_delete);
router.get('/myads', appController.myads_get);

module.exports = router;

