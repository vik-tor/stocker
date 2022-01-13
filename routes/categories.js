const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authenticate');

const categoryController = require('../controllers/category');

router.get('/', categoryController.getAllCategories);
router.post('/', verifyToken, categoryController.addCategory);
router.put('/:id', verifyToken, categoryController.editCategory);
router.delete('/:id', verifyToken, categoryController.deleteCategory);

module.exports = router;
