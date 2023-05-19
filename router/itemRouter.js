const express = require('express');
const router = express.Router();

const { getTopSellingItems, getProductDetails, updateItem, deleteItem } = require('../controllers/itemController');

router.get('/products/top_selling', getTopSellingItems);

router.get('/products/product_details', getProductDetails);

router.put('/products/update/:itemId', updateItem);

router.delete('/products/update/:itemId', deleteItem);

module.exports = router;