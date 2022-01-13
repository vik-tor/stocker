const jwt = require('jsonwebtoken');
const { secret } = require('../config');
const { log } = require('../helpers/logger');
const {
  errorMessage, status,
} = require('../helpers/status');

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    errorMessage.error = 'Token not provided';
    console.log('Authentication error: Token not provided')
    return res.status(status.bad).send(errorMessage);
  } else {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        errorMessage.error = 'Authentication Failed';
        log('Verify JWT', err);
        return res.status(status.unauthorized).send(errorMessage);
      };

      req.user = decoded;
      next();
    });
  }
};

module.exports = { verifyToken };