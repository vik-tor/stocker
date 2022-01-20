const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authenticate');

const deviceController = require('../controllers/devices');

router.get('/', deviceController.getAllDevices);
router.get('/:id', deviceController.getByID);
router.post('/', verifyToken, deviceController.addDevice);
router.put('/:id', verifyToken, deviceController.editDevice);
router.get('/sold', verifyToken, deviceController.getSold);
router.patch('/:id', verifyToken, deviceController.setSold);
router.delete('/:id', verifyToken, deviceController.deleteDevice);

module.exports = router;
