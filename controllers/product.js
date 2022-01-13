const Product = require('../models/product');
const Category = require('../models/category');
const Location = require('../models/location');

const slugger = require('slug');
const { validationResult } = require('express-validator');
const { errorMessage, successMessage, status } = require('../helpers/status');
const { log } = require('../helpers/logger');

const addProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorMessage.data = errors.array();
    errorMessage.error = 'Failed to create product';
    log('Create product', errors.array());
    return res.status(status.bad).send(errorMessage);
    // return res.status(422).jsonp(errors.array());
  };

  const {
    title, images, price, tags, location_id, category_id, details, specs, condition, owner_id, brand
  } = req.body;
  const slug = slugger(title);
  const values = [
    title, slug, images, price, tags, location_id, category_id, details, specs, condition, owner_id, brand
  ];

  await Product.create(values, (err, product) => {
    if (err) {
      errorMessage.error = 'Failed to create product: ' + err.message;
      log('Create product', err);
      return res.status(status.error).send(errorMessage);
    }

    successMessage.data = product;
    return res.status(status.success).send(successMessage);
  });
};

const getAllProducts = async (req, res) => {
  await Product.fetchAll((err, data) => {
    if (err) {
      if (err == status.notfound) {
        errorMessage.error = 'No products in the database';
        return res.status(status.notfound).send(errorMessage);
      } else {
        errorMessage.error = 'An error occured fetching product: ' + err.message;
        log('Get products', err);
        return res.status(status.error).send(errorMessage);
      };
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

const getBySlug = async (req, res) => {
  const slug = req.params;

  await Product.fetchBySlug(slug.slug, async (err, product) => {
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

    let category, location, owner;

    await Category.fetchById(product.category_id, (err, data) => {
      if (err) {
        errorMessage.error = 'An error occured fetching category: ' + err.message;
        log('Fetch category', err);
        return res.status(status.error).send(errorMessage);
      };
      category = data;
    });
    product.category = category;

    await Location.fetchById(product.id, (err, data) => {
      if (err) {
        errorMessage.error = 'An error occured fetching location: ' + err;
        log('Fetch location', err);
        return res.status(status.error).send(errorMessage);
      };
      location = data;
    });
    product.location = location;

    await User.fetchById(product.owner_id, (err, data) => {
      if (err) {
        errorMessage.error = 'An error occured: ' + err.message;
        log('Fetch owner', err);
        return res.status(status.error).send(errorMessage);
      };
      owner = data;
    });
    product.owner = owner;

    successMessage.data = product;
    return res.status(status.success).send(successMessage);
  });
};

const editProduct = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    errorMessage.data = errors.array();
    errorMessage.error = 'Failed to create product';
    log('Create product', errors.array());
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;
  const {
    title, images, price, tags, location_id, category_id, details, specs, condition, owner_id, brand
  } = req.body;
  const slug = slugger(title);
  const values = [
    title, slug, images, price, tags, location_id, category_id, details, specs, condition, owner_id, brand, id.id
  ];

  await Product.edit(values, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed to modify product: ' + err.message;
      log('Edit product', err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

const deleteproduct = async (req, res) => {
  const id = req.params;
  await Product.delete(id.id, (err) => {
    if (err) {
      errorMessage.error = 'Failed to delete product: ' + err.message;
      log('Delete product', err);
      return res.status(status.error).send(errorMessage);
    }
    return res.status(status.nocontent);
  });
};

const addFavorite = async (req, res) => {
  const user_id = req.user.id;
  if (user_id == undefined) {
    errorMessage.error = 'Please login to continue.';
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;
  await Product.addFavorite(id.id, user_id, (err) => {
    if (err) {
      errorMessage.error = 'Failed to add to favorites' + err.message;
      log('Add favorite', err);
      return res.status(status.error).send(errorMessage);
    }
    successMessage.data = true;
    return res.status(status.success).send(successMessage);
  });
};

const removeFavorite = async (req, res) => {
  const user_id = req.user.id;
  if (user_id === undefined) {
    errorMessage.error = 'Please login to continue.';
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;
  await Product.removeFavorite(id.id, user_id, (err) => {
    if (err) {
      errorMessage.error = 'Failed to remove from favorites' + err.message;
      log('Remove favorite', err);
      return res.status(status.error).send(errorMessage);
    }
    successMessage.data = false;
    return res.status(status.success).send(successMessage);
  });
};

module.exports = {
  getAllProducts,
  getBySlug,
  addProduct,
  editProduct,
  deleteproduct,
  addFavorite,
  removeFavorite
};