const { db } = require('../db/query');
const moment = require('moment');

class User {
  constructor(data) {
    this.id = data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.status = data.status || null;
    this.role = data.role;
    this.created_at = moment(data.created_at).format('MMM D, YYYY') || null;
    this.updated_at = moment(data.updated_at).format('MMM D, YYYY') || null;
  };

  static async fetchAll(cb) {
    const stmt = `
      SELECT id, first_name, last_name, username, email, status, role, created_at, updated_at
      FROM stock.users
    `;

    await db.any(stmt)
      .then(data => {
        let users = [];
        data.forEach((item) =>
          users.push(new User(item))
        );
        return cb(null, users);
      })
      .catch(err => {
        return cb(err);
      })
  };

  static async fetchById(id, callback) {
    const stmt = `
      SELECT id, first_name, last_name, username, email, password, status, role, created_at, updated_at
      FROM stock.users
      WHERE id = $1
    `;

    await db.one(stmt, id)
      .then(data => {
        return callback(null, new User(data));
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async fetchUser(params, callback) {
    const stmt = `
      SELECT id, first_name, last_name, username, email, password, status, role, created_at, updated_at
      FROM stock.users
      WHERE email = $1 OR username = $1
    `;

    await db.one(stmt, params)
      .then(data => {
        return callback(null, new User(data));
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async create(values, callback) {
    const stmt = `
      INSERT INTO stock.users (
        first_name, last_name, username, email, password, created_at
      )
      VALUES ($1, $2, $3, $4, $5, NOW())
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        return callback(null, new User(data));
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async edit(values, callback) {
    const stmt = `
      UPDATE stock.users
      SET first_name = $1, last_name = $2, email = $3, updated_at = NOW()
      WHERE id = $4
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        return callback(null, new User(data));
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async updateUsername(values, cb) {
    const stmt = `
      UPDATE stock.users
      SET username = $1, updated_at = NOW()
      WHERE id = $2
    `;

    await db.none(stmt, values)
      .then(data => {
        return cb(null, data);
      })
      .catch(err => {
        return cb(err);
      });
  };

  static async updatePassword(values, cb) {
    const stmt = `
      UPDATE stock.users
      SET password = $1, updated_at = NOW()
      WHERE id = $2
    `;

    await db.none(stmt, values)
      .then(data => {
        return cb(null, data);
      })
      .catch(err => {
        return cb(err);
      });
  };

  static async assignRole(values, callback) {
    const stmt = `
      UPDATE stock.users
      SET role = $1, updated_at = NOW()
      WHERE id = $2
    `;

    await db.none(stmt, values)
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async suspend(id, callback) {
    const stmt = `
      UPDATE stock.users
      SET status = $1
      WHERE id = $2
      RETURNING *
    `;

    await db.none(stmt, ['suspended', id])
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async restore(id, callback) {
    const stmt = `
      UPDATE stock.users
      SET status = $1
      WHERE id = $2
      RETURNING *
    `;

    await db.none(stmt, ['active', id])
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async trash(id, callback) {
    const stmt = `
      UPDATE stock.users
      SET deleted = $1, deleted_on = NOW()
      WHERE id = $2
      RETURNING *
    `;

    await db.none(stmt, [true, id])
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  };
};

module.exports = User;