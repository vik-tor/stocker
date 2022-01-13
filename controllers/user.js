const User = require('../models/user');

const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { generateToken, generateRefreshToken, hashPassword } = require('../helpers/validation');
const { errorMessage, successMessage, status } = require('../helpers/status');
const { log } = require('../helpers/logger');
const { secret } = require('../config');

const refreshTokens = [];

const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  };

  // comment

  const {
    first_name, last_name, email, password, phone, gender, created_at
  } = req.body;
  const hashedPassword = await hashPassword(password);
  const values = [
    first_name, last_name, email, hashedPassword, phone, gender, created_at
  ];
  let usr = [];

  await User.create(values, (err, user) => {
    if (err) {
      if (err.routine === '_bt_check_unique') {
        errorMessage.error = 'User with that EMAIL already exists';
        return res.status(status.conflict).send(errorMessage);
      };
      errorMessage.error = 'Failed to create account: ' + err.message;
      log("Signup", err);
      return res.status(status.error).send(errorMessage);
    };

    const token = generateToken(user.id, user.email, user.role);
    const refreshToken = generateRefreshToken(user.id, user.email, user.role);
    refreshTokens.push(refreshToken);

    delete user.password;
    var response = {};
    response.token = token;
    response.refresh = refreshToken;
    user.name = user.first_name + ' ' + user.last_name;
    response.user = user;

    successMessage.data = response;
    return res.status(status.created).send(successMessage);
  });
};

const signin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  };

  const { email, password } = req.body;

  await User.fetchByEmail(email, async (err, user) => {
    if (err) {
      if (err.received == 0) {
        errorMessage.error = 'User with the email (' + email + ') does not exist';
        return res.status(status.notfound).send(errorMessage);
      } else {
        errorMessage.error = 'Could not fetch data: ' + err.message;
        log("Signin", err);
        return res.status(status.error).send(errorMessage);
      }
    };

    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      errorMessage.error = 'Wrong password';
      errorMessage.param = 'password';
      return res.status(status.bad).send(errorMessage);
    }

    const token = generateToken(user.id, user.email, user.role);
    const refreshToken = generateRefreshToken(user.id, user.email, user.role);
    refreshTokens.push(refreshToken);

    delete user.password;
    var response = {};
    response.token = token;
    response.refresh = refreshToken;
    user.name = user.first_name + ' ' + user.last_name;
    response.user = user;

    successMessage.data = response;
    return res.status(status.success).send(successMessage);
  });
};

const fetchProfile = async (req, res) => {
  const email = req.user.email;

  await User.fetchByEmail(email, (err, user) => {
    if (err) {
      errorMessage.error = 'Could not fetch data: ' + err.message;
      log("Signin", err);
      return res.status(status.error).send(errorMessage);
    };

    delete user.password;

    successMessage.data = user;
    return res.status(status.success).send(successMessage);
  })
}

const refreshUserToken = async (req, res) => {
  const { refreshToken } = req.body;
  console.log(refreshToken);
  console.log(refreshTokens);

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, secret, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    const token = generateToken(user.id, user.email, user.user_role);

    res.json({
      token
    });
  });
};

const logout = async (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter(token => t !== refreshToken);

  res.send('Successfully logged out');
};

const editProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).jsonp(errors.array());
  };

  const id = req.params;
  const { first_name, last_name, email, phone, gender } = req.body;
  const values = [
    first_name, last_name, email, phone, gender, id
  ];

  await User.edit(values, (err, user) => {
    if (err) {
      errorMessage.error = 'Failed to edit profile: ' + err.message;
      log('Edit profile', err);
      return res.status(status.error).send(errorMessage);
    }

    successMessage.data = user;
    return res.status(status.created).send(successMessage);
  });
};

const trashUser = async (req, res) => {
  const id = req.params;

  await User.trash(id.id, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed to delete account: ' + err;
      log('Delete profile', err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = data;
    return res.status(status.nocontent).send(successMessage);
  });
};

const getFavorites = async (req, res) => {
  const { id } = req.user;

  await User.getLikedEvents(id, (err, data) => {
    if (err) {
      errorMessage.error = 'Failed to fetch liked events: ' + err;
      log('Get faves', err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = data;
    return res.status(status.success).send(successMessage);
  });
}

module.exports = {
  signup,
  signin,
  logout,
  fetchProfile,
  refreshUserToken,
  editProfile,
  trashUser,
  getFavorites
};