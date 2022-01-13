const { db } = require('../db/query');
const moment = require('moment');

class Location {
  constructor(data) {
    this.id = data.id || null;
    this.city = data.city;
    this.slug = data.slug;
    this.coordinates = data.coordinates;
    this.county = data.county || null;
  }

  static async create(values, callback) {
    const stmt = `
      INSERT INTO locations (
        city, slug, coordinates, county
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        callback(null, new Location(data));
      })
      .catch(err => {
        return callback(err);
      });
  }

  static async fetchAll(callback) {
    const stmt = `
      SELECT id, city, slug, coordinates, county
      FROM locations
    `;

    await db.any(stmt)
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async fetchById(id, callback) {
    const stmt = `
      SELECT id, city, slug, coordinates, county
      FROM locations
      WHERE id = $1
    `;

    await db.any(stmt, id)
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async fetchByCounty(county, callback) {
    const stmt = `
      SELECT id, city, slug, coordinates, county
      FROM locations
      WHERE county = $1
      ORDER BY city DESC
    `;

    await db.any(stmt, id)
      .then(data => {
        let Locations = [];
        data.forEach((item) =>
          Locations.push(new Location(item))
        );
        return callback(null, Locations);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async edit(values, callback) {
    const stmt = `
      UPDATE locations
      SET city = $1, slug = $2, coordinates = $3, county = $4
      WHERE id = $6
      RETURNING *
    `;

    await db.any(stmt, values)
      .then(data => {
        return callback(null, new Location(data));
      })
      .catch(err => {
        return callback(err);
      })
  };

  static async delete(id, callback) {
    const stmt = `
      DELETE FROM locations
      WHERE id = $1
    `;

    await db.any(stmt, id)
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      })
  };
}

module.exports = Location;