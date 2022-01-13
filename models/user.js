const { db } = require('../db/query');
const moment = require('moment');

class User {
  constructor(data) {
    this.id = data.id;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
    this.password = data.password;
    this.phone = data.phone || null;
    this.gender = data.gender || null;
    this.status = data.status || null;
    this.role = data.role;
    this.created_at = moment(data.created_at).format('MMM D, YYYY') || null;
  };

  static async fetchAll(cb) {
    const stmt = `
      SELECT id, first_name, last_name, email, created_at, status, role
      FROM users
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
      SELECT id, first_name, last_name, email, password, phone, gender, created_at, status, role
      FROM users
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

  static async fetchByEmail(email, callback) {
    const stmt = `
      SELECT id, first_name, last_name, email, password, phone, gender, created_at, status, role
      FROM users
      WHERE email = $1
    `;

    await db.one(stmt, email)
      .then(data => {
        return callback(null, new User(data));
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async create(values, callback) {
    const stmt = `
      INSERT INTO users (
        first_name, last_name, email, password, phone, gender, created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
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
      UPDATE users
      SET first_name = $1, last_name = $2, email = $ 3, phone = $4, gender = $5, updated_at = NOW()
      WHERE id = $6
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

  static async assignRole(values, callback) {
    const stmt = `
      UPDATE users
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
      UPDATE users
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
      UPDATE users
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
      UPDATE users
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

  static async getLikedEvents(id, callback) {
    const stmt = `
      SELECT a.id, a.title, a.slug, a.featured_image, a.start_date, a.location, a.online, a.paid
      FROM activities a
      LEFT JOIN activity_user u
        ON u.activity_id = a.id
        WHERE u.user_id = $1
    `;

    await db.any(stmt, id)
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  };


  static async fetchSubs(id, callback) {
    const stmt = `
      SELECT ARRAY(
        SELECT user_id from subscriptions
        WHERE activity_id = $1
      )
    `;

    await db.any(stmt, id)
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async subscribe(aid, uid, tid, cb) {
    const stmt = `
      INSERT INTO subscriptions (
        product_id, user_id, transaction_id, created_at
      )
      VALUES ($1, $2, $3, NOW())
    `;

    await db.none(stmt, [aid, uid, tid])
      .catch(err => {
        return cb(err);
      })
  };

  static async unsubscribe(aid, uid, cb) {
    const stmt = `
      DELETE FROM subscriptions
      WHERE product_id = $1 AND user_id = $2
    `;

    await db.none(stmt, [aid, uid])
      .catch(err => {
        return cb(err);
      })
  };
};

module.exports = User;