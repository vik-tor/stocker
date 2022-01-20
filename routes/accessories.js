const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authenticate');

const accessoryController = require('../controllers/accessories');

router.get('/', accessoryController.getAllAccessories);
router.get('/:id', accessoryController.getByID);
router.post('/', verifyToken, accessoryController.addAccessory);
router.put('/:id', verifyToken, accessoryController.editAccessory);
router.get('/sold', verifyToken, accessoryController.getSold);
router.patch('/:id', verifyToken, accessoryController.setSold);
router.delete('/:id', verifyToken, accessoryController.deleteAccessory);

module.exports = router;
