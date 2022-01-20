const Sale = require('../models/sale');

const { validationResult } = require('express-validator');
const { errorMessage, successMessage, status } = require('../helpers/status');
const { log } = require('../helpers/logger');

const addSale = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorMessage.data = errors.array();
    errorMessage.error = 'Failed to add sale';
    log('Add sale', errors.array());
    return res.status(status.bad).send(errorMessage);
    // return res.status(422).jsonp(errors.array());
  };

  const {
    product_id, product_type, quantity, price, total, payment_method, transaction_code, shop, created_at
  } = req.body;
  const values = [
    product_id, product_type, quantity, price, total, payment_method, transaction_code, shop, created_at
  ];

  await Sale.create(values, (err, sale) => {
    if (err) {
      errorMessage.error = 'Failed to add product: ' + err.message;
      log('Add product', err);
      return res.status(status.error).send(errorMessage);
    }

    successMessage.data = sale;
    return res.status(status.success).send(successMessage);
  });
};

const fetchSales = async (req, res) => {
  await Sale.fetchAll((err, data) => {
    if (err) {
      if (err == status.notfound) {
        errorMessage.error = 'No sales found.';
        return res.status(status.notfound).send(errorMessage);
      } else {
        errorMessage.error = 'An error occured fetching sales: ' + err.message;
        log('Get sales', err);
        return res.status(status.error).send(errorMessage);
      };
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

const getByID = async (req, res) => {
  const id = req.params;

  await Sale.fetchByID(id.id, async (err, sale) => {
    if (err) {
      if (err.received == 0) {
        errorMessage.error = 'That sale does not exist';
        return res.status(status.notfound).send(errorMessage);
      } else {
        errorMessage.error = 'An error occured fetching the sale: ' + err.message;
        log('Fetch sale', err);
        return res.status(status.error).send(errorMessage);
      };
    };

    successMessage.data = sale;
    return res.status(status.success).send(successMessage);
  });
};

const editSale = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorMessage.data = errors.array();
    errorMessage.error = 'Failed to edit sale';
    log('Edit sale', errors.array());
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;
  const {
    product_id, product_type, quantity, price, total, payment_method, transaction_code, shop, created_at
  } = req.body;
  const values = [
    product_id, product_type, quantity, price, total, payment_method, transaction_code, shop, created_at, id.id
  ];

  await Sale.edit(values, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed to edit sale: ' + err.message;
      log('Edit sale', err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

const deleteSale = async (req, res) => {
  const id = req.params;
  await Sale.delete(id.id, (err) => {
    if (err) {
      errorMessage.error = 'Failed to delete sale: ' + err.message;
      log('Delete sale', err);
      return res.status(status.error).send(errorMessage);
    }
    return res.status(status.nocontent);
  });
};

module.exports = {
  addSale,
  fetchSales,
  getByID,
  editSale,
  deleteSale
};