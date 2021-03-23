const express = require('express');

const ProductControllers = require('../Controllers/ProductControllers');

const router = express.Router();

router.get('/', ProductControllers.getProduct);
router.get('/:id', ProductControllers.getProductlById);
router.post('/', ProductControllers.createProduct);
router.patch('/:id', ProductControllers.updateProductById);
router.delete('/:id', ProductControllers.deleteProductById);
router.post('/part/:id', ProductControllers.addPartById);
router.patch('/part/:id', ProductControllers.deletePartById);

module.exports = router;