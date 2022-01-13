const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authenticate');

const adminController = require('../controllers/admin');

router.get('/user/:id', verifyToken, adminController.getUserById);
router.get('/users', verifyToken, adminController.getUsers);
router.patch('/assignrole', verifyToken, adminController.assignUserRole);
router.patch('/suspend/:id', verifyToken, adminController.suspendUser);
router.patch('/restore/:id', verifyToken, adminController.restoreUser);
router.post('/image', verifyToken, adminController.uploadFile);

module.exports = router;
