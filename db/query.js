const promise = require('bluebird');
const initOptions = {
  promiseLib: promise
};
const pgp = require('pg-promise')(initOptions);

const { dbUrl } = require('../config');
const db = pgp(dbUrl);

module.exports = { db };
