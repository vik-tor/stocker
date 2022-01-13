const Category = require('../models/category');

const slugger = require('slug');
const { errorMessage, successMessage, status } = require('../helpers/status');
const { log } = require('../helpers/logger');

const getAllCategories = async (req, res) => {
  await Category.fetchAll((err, data) => {
    if (err) {
      if (err == status.notfound) {
        errorMessage.error = 'No categories in the database';
        return res.status(status.notfound).send(errorMessage);
      } else {
        errorMessage.error = 'An error occured fetching categories: ' + err.message;
        log('Get categories', err);
        return res.status(status.error).send(errorMessage);
      };
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

const addCategory = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin' && role != 'editor') {
    errorMessage.error = 'Sorry. You are not authorised to edit categories.';
    return res.status(status.bad).send(errorMessage);
  };

  const {
    title, parent, tree
  } = req.body;
  const slug = slugger(title);
  const values = [
    title, slug, parent, tree
  ];

  await Category.create(values, (err, category) => {
    if (err) {
      errorMessage.error = 'Failed to create category: ' + err.message;
      log('Create category', err);
      return res.status(status.error).send(errorMessage);
    }

    successMessage.data = category;
    return res.status(status.success).send(successMessage);
  });
};

const editCategory = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin' && role != 'editor') {
    errorMessage.error = 'Sorry. You are not authorised to edit categories.';
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;
  const {
    title, parent, tree
  } = req.body;
  const slug = slugger(title);
  const values = [
    title, slug, parent, tree, id.id
  ];

  await Category.edit(values, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed to modify category: ' + err.message;
      log('Edit category', err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
};

const deleteCategory = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin' && role != 'editor') {
    errorMessage.error = 'Sorry. You are not authorised to edit categories.';
    return res.status(status.bad).send(errorMessage);
  };

  const id = req.params;
  await Category.delete(id.id, (err) => {
    if (err) {
      errorMessage.error = 'Failed to delete category: ' + err.message;
      log('Delete category', err);
      return res.status(status.error).send(errorMessage);
    }
    return res.status(status.nocontent);
  });
};

module.exports = {
  getAllCategories,
  addCategory,
  editCategory,
  deleteCategory
};