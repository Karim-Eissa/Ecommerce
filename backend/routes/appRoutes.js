const express=require('express');
const router=express.Router();
const appController=require('../controllers/appController')
const requireAuth=require('../middleware/requireAuth')
require('dotenv').config()
router.get('/section/:category', appController.section_get);
router.get('/shopby/:type', appController.shopby_get);
router.get('/shopbybrand/:brand', appController.shopbybrand_get);
router.get('/search', appController.search_get);
router.get('/product/:id', appController.product_get);
router.use(requireAuth)
router.delete('/myads/:id', appController.delete_delete);
router.get('/myads', appController.myads_get);
router.post('/submit', appController.submit_post);

module.exports = router;
