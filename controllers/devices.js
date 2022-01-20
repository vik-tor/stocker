const Device = require('../models/device');

const slugger = require('slug');
const { validationResult } = require('express-validator');
const { errorMessage, successMessage, status } = require('../helpers/status');
const { log } = require('../helpers/logger');

const addDevice = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorMessage.data = errors.array();
    errorMessage.error = 'Failed to create device';
    log('Create device', errors.array());
    return res.status(status.bad).send(errorMessage);
    // return res.status(422).jsonp(errors.array());
  };

  const {
    brand, model, serial_no, device_type, images, price, processor, processor_speed, ram, storage_size, storage_type, screen_size, main_camera, selfie_camera, fault_free, condition, shop, created_at, updated_at
  } = req.body;
  const slug = slugger(model);
  const values = [
    brand, model, slug, serial_no, device_type, images, price, processor, processor_speed, ram, storage_size, storage_type, screen_size, main_camera, selfie_camera, fault_free, condition, shop, created_at, updated_at
  ];

  await Device.create(values, (err, device) => {
    if (err) {
      errorMessage.error = 'Failed to add product: ' + err.message;
      log('Add product', err);
      return res.status(status.error).send(errorMessage);
    }

    successMessage.data = device;
    return res.status(status.success).send(successMessage);
  });
};

const getAllDevices = async (req, res) => {
  await Device.fetchAll((err, data) => {
    if (err) {
      if (err == status.notfound) {
        errorMessage.error = 'No products in the database';
        return res.status(status.notfound).send(errorMessage);
      } else {
        errorMessage.error = 'An error occured fetching products: ' + err.message;
        log('Get products', err);
        return res.status(status.error).send(errorMessage);
      };
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

const getByID = async (req, res) => {
  const id = req.params;

  await Device.fetchByID(id.id, async (err, device) => {
    if (err) {
      if (err.received == 0) {
        errorMessage.error = 'That product does not exist';
        return res.status(status.notfound).send(errorMessage);
      } else {
        errorMessage.error = 'An error occured fetching product: ' + err.message;
        log('Fetch product (slug)', err);
        return res.status(status.error).send(errorMessage);
      };
    };

    successMessage.data = device;
    return res.status(status.success).send(successMessage);
  });
};

const editDevice = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorMessage.data = errors.array();
    errorMessage.error = 'Failed to edit product';
    log('Edit product', errors.array());
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;
  const {
    brand, model, serial_no, device_type, images, price, processor, processor_speed, ram, storage_size, storage_type, screen_size, main_camera, selfie_camera, fault_free, condition, shop, created_at, updated_at
  } = req.body;
  const slug = slugger(title);
  const values = [
    brand, model, slug, serial_no, device_type, images, price, processor, processor_speed, ram, storage_size, storage_type, screen_size, main_camera, selfie_camera, fault_free, condition, shop, created_at, updated_at, id.id
  ];

  await Device.edit(values, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed to edit product: ' + err.message;
      log('Edit product', err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

const deleteDevice = async (req, res) => {
  const id = req.params;
  await Device.delete(id.id, (err) => {
    if (err) {
      errorMessage.error = 'Failed to delete product: ' + err.message;
      log('Delete product', err);
      return res.status(status.error).send(errorMessage);
    }
    return res.status(status.nocontent);
  });
};

const getSold = async (req, res) => {
  await Device.fetchSold((err, data) => {
    if (err) {
      if (err == status.notfound) {
        errorMessage.error = 'No products found';
        return res.status(status.notfound).send(errorMessage);
      } else {
        errorMessage.error = 'An error occured fetching products: ' + err.message;
        log('Get products', err);
        return res.status(status.error).send(errorMessage);
      };
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

const setSold = async (req, res) => {
  const id = req.params;
  await Device.setSold(id.id, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed! : ' + err.message;
      log('Mark sold', err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

module.exports = {
  getAllDevices,
  getByID,
  addDevice,
  editDevice,
  deleteDevice,
  getSold,
  setSold
};