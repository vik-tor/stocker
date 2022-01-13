var express = require('express');
var router = express.Router();
const { verifyToken } = require('../middleware/authenticate');
const { check } = require('express-validator');

var ticketController = require('../controllers/ticket');

router.get('/:id', ticketController.fetchTickets);
router.post('/', verifyToken, [
  check('activity_id', 'Select an event').not().isEmpty(),
  check('title', 'Enter a ticket name').not().isEmpty(),
  check('charges', 'Enter an amount for the ticket').not().isEmpty(),
], ticketController.addTicket);
router.put('/:id', verifyToken, [
  check('activity_id', 'Select an event').not().isEmpty(),
  check('title', 'Enter a ticket name').not().isEmpty(),
  check('charges', 'Enter an amount for the ticket').not().isEmpty(),
], ticketController.editTicket);
router.delete('/:id', verifyToken, ticketController.deleteTicket);

module.exports = router;
