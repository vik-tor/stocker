const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { secret } = require('../config');

const isValidEmail = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};

const validatePassword = (password) => {
  if (password.length <= 5 || password === '') {
    return false;
  } return true;
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
}

const isEmpty = (input) => {
  if (input === undefined || input === '') {
    return true;
  }
  if (input.replace(/\s/g, '').length) {
    return false;
  } return true;
};

const empty = (input) => {
  if (input === undefined || input === '') {
    return true;
  }
};

const generateToken = (id, email, role) => {
  const token = jwt.sign({
    id,
    email,
    role
  },
    secret, {
    expiresIn: '1d'
  });

  return token;
}

const generateRefreshToken = (id, email, role) => {
  const refreshToken = jwt.sign({
    id,
    email,
    role
  },
    secret
  );

  return refreshToken;
}

module.exports = {
  isValidEmail,
  validatePassword,
  hashPassword,
  isEmpty,
  empty,
  generateToken,
  generateRefreshToken
};