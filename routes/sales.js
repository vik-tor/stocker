const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authenticate');

const salesController = require('../controllers/sales');

router.get('/', salesController.fetchSales);
router.get('/:id', salesController.getByID);
router.post('/', verifyToken, salesController.addSale);
router.put('/:id', verifyToken, salesController.editSale);
router.delete('/:id', verifyToken, salesController.deleteSale);

module.exports = router;
