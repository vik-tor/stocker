const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authenticate');

const productController = require('../controllers/product');

router.get('/', productController.getAllProducts);
router.get('/:slug', productController.getBySlug);
router.post('/', verifyToken, productController.addProduct);
router.put('/:id', verifyToken, productController.editProduct);
router.get('/favorite/:id', verifyToken, productController.addFavorite);
router.delete('/favorite/:id', verifyToken, productController.removeFavorite);
router.delete('/:id', verifyToken, productController.deleteproduct);

module.exports = router;
