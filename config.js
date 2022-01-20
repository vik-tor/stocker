const dotenv = require('dotenv');

dotenv.config();

const apiPort = process.env.APIPORT;
const secret = process.env.SECRET;
const dbUrl = process.env.DATABASE_URL;

module.exports = {
  dbUrl,
  apiPort,
  secret
};