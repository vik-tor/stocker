var express = require('express');
var router = express.Router();
const { verifyToken } = require('../middleware/authenticate');
const { check } = require('express-validator');

const userController = require('../controllers/user');

router.post('/signup', [
  check('first_name', 'Enter your first name').isLength({ max: 20, min: 3 }).trim().escape().not().isEmpty(),
  check('last_name', 'Enter your last name').isLength({ max: 20, min: 3 }).trim().escape().not().isEmpty(),
  check('email', 'Enter a valid email address').isEmail().normalizeEmail().not().isEmpty(),
  check('password', 'Enter a strong password').isLength({ min: 6 }).not().isEmpty(),
], userController.signup);
router.post('/signin', [
  check('password', 'Enter your password').not().isEmpty(),
], userController.signin);
router.get('/profile', verifyToken, userController.fetchProfile);
router.put('/:id', verifyToken, [
  check('first_name', 'Enter your first name').isLength({ max: 20, min: 3 }).trim().escape().not().isEmpty(),
  check('last_name', 'Enter your last name').isLength({ max: 20, min: 3 }).trim().escape().not().isEmpty(),
  check('email', 'Enter a valid email address').isEmail().normalizeEmail().not().isEmpty(),
  check('password', 'Enter a strong password').isLength({ min: 6 }).not().isEmpty(),
], userController.editProfile);
router.put('/:id/username', verifyToken, [check('username', 'Enter a valid username').isLength({ min: 3 }).not().isEmpty()], userController.changeUsername);
router.put('/:id/password', verifyToken, [check('password', 'Enter a strong password').isLength({ min: 6 }).not().isEmpty()], userController.changePassword);
router.patch('/:id/remove', verifyToken, userController.trashUser);
router.post('/token', verifyToken, userController.refreshUserToken);
router.post('/logout', verifyToken, userController.logout);

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
