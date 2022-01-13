var express = require('express');
var router = express.Router();
const { verifyToken } = require('../middleware/authenticate');

var locationController = require('../controllers/location');

router.get('/', locationController.fetchLocations);
router.post('/', verifyToken, locationController.addLocation);
router.put('/:id', verifyToken, locationController.editLocation);
router.delete('/:id', verifyToken, locationController.deleteLocation);

module.exports = router;
