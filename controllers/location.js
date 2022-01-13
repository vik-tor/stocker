const Location = require('../models/location');

const pgp = require('pg-promise');
const { errorMessage, successMessage, status } = require('../helpers/status');
const { log } = require('../helpers/logger');

const fetchLocations = async (req, res) => {
  await Location.fetchAll((err, locations) => {
    if (err) {
      errorMessage.error = 'Error fetching locations: ' + err.message;
      log('Fetch locations', err)
      return res.status(status.error).send(errorMessage);
    }
    successMessage.data = locations;
    return res.status(status.success).send(successMessage);
  });
};

const addLocation = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin' && role != 'editor') {
    errorMessage.error = 'Sorry. You are not authorised to edit locations.';
    return res.status(status.bad).send(errorMessage);
  }

  const {
    city, slug, lat, long, county
  } = req.body;
  var point = new Point(parseFloat(lat), parseFloat(long));
  const values = [
    city, slug, point, county
  ];

  await Location.create(values, (err, location) => {
    if (err) {
      errorMessage.error = 'Failed to add location: ' + err.message;
      log('Add location', err);
      return res.status(status.error).send(errorMessage);
    };
    successMessage.data = location;
    return res.status(status.created).send(successMessage);
  });
};

const editLocation = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin' && role != 'editor') {
    errorMessage.error = 'Sorry. You are not authorised to edit locations.';
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;
  const {
    city, slug, lat, long, county
  } = req.body;
  const values = [
    city, slug, lat, long, county, id.id
  ];

  await Location.edit(values, (err) => {
    if (err) {
      errorMessage.error = 'Failed to modify location: ' + err.message;
      log('Edit location', err);
      return res.status(status.error).send(errorMessage);
    };
    return res.status(status.nocontent);
  });
};

const deleteLocation = async (req, res) => {
  const { role } = req.user;
  if (role != 'admin' && role != 'editor') {
    errorMessage.error = 'Sorry. You are not authorised to edit locations.';
    return res.status(status.bad).send(errorMessage);
  }

  const id = req.params;

  await Location.delete(id.id, (err) => {
    if (err) {
      errorMessage.error = 'Failed to delete location: ' + err.message;
      log('Delete location', err);
      return res.status(status.error).send(errorMessage);
    };
    return res.status(status.nocontent);
  });
};

function Point(x, y) {
  this.rawType = true; // no escaping, because we return pre-formatted SQL
  this.toPostgres = () => pgp.as.format('POINT($1, $2)', [x, y]);
}

module.exports = {
  fetchLocations,
  addLocation,
  editLocation,
  deleteLocation
};