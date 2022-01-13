const multer = require('multer');
const fs = require('fs');
const { imfilter } = require('../helpers/filter');
const User = require('../models/user');
const { storage } = require('../helpers/storage');

const { errorMessage, successMessage, status } = require('../helpers/status');
const { log } = require('../helpers/logger');

const getUserById = async (req, res) => {
  const id = req.params;

  await User.fetchById(id.id, (err, user) => {
    if (err) {
      errorMessage.error = 'Could not fetch user: ' + err.message;
      log("Get by id", err);
      return res.status(status.error).send(errorMessage);
    };

    delete user.password;

    successMessage.data = user;
    return res.status(status.success).send(successMessage);
  })
}

const getUsers = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin') {
    errorMessage.error = 'Sorry. You are not authorised to view users.';
    return res.status(status.bad).send(errorMessage);
  }

  await User.fetchAll((err, users) => {
    if (err) {
      errorMessage.error = 'Failed to fetch users: ' + err.message;
      log(err);
      return res.status(status.error).send(errorMessage);
    }
    successMessage.data = users;
    return res.status(status.success).send(successMessage);
  })
};

const assignUserRole = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin') {
    errorMessage.error = 'Sorry. You are not authorised to assign roles.';
    return res.status(status.bad).send(errorMessage);
  }

  const {
    user_id, user_role
  } = req.body;
  const values = [user_role, user_id];

  await User.assignRole(values, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed to assign role: ' + err.message;
      log(err);
      return res.status(status.error).send(errorMessage);
    }
    successMessage.data = data;
    return res.status(status.nocontent).send(successMessage);
  })
};

const suspendUser = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin') {
    errorMessage.error = 'Sorry. You are not authorised to suspend users.';
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;

  await User.suspend(id.id, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed to suspend user: ' + err.message;
      log(err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = data;
    return res.status(status.nocontent).send(successMessage);
  });
};

const restoreUser = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin') {
    errorMessage.error = 'Sorry. You are not authorised to restore users.';
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;

  await User.restore(id.id, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed to restore user: ' + err.message;
      log(err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = data;
    return res.status(status.nocontent).send(successMessage);
  });
};

const uploadFile = async (req, res) => {
  let upload = multer({ storage: storage, fileFilter: imfilter }).single('featured');

  upload(req, res, function (err) {
    if (req.fileValidationError) {
      return res.status(status.error).send(req.fileValidationError);
    }
    else if (!req.file) {
      return res.status(status.bad).send('Please select an image to upload');
    }
    else if (err instanceof multer.MulterError) {
      return res.status(status.error).send(err);
    }
    else if (err) {
      return res.status(status.error).send(err);
    }

    var filename = req.file.filename;

    fs.copyFile('/tmp/' + filename, './src/assets/images/activities/' + filename, (err) => {
      if (err) {
        log(err);
      };
      console.log('Copied!');
      fs.rm('/tmp/' + filename, (err) => {
        if (err) log(err);
      });
    })

    successMessage.data = filename;
    return res.status(status.success).send(successMessage);
  });
}

module.exports = {
  getUserById,
  getUsers,
  assignUserRole,
  suspendUser,
  restoreUser,
  uploadFile
};