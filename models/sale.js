const { db } = require('../db/query');
const moment = require('moment');

class Sale {
  constructor(data) {
    this.id = data.id || null;
    this.product_id = data.product_id || null;
    this.product_type = data.product_type;
    this.quantity = data.quantity;
    this.price = data.price;
    this.total = data.total;
    this.payment_method = data.payment_method;
    this.transaction_code = data.transaction_code || null;
    this.shop = data.shop || null;
    this.created_at = moment(data.created_at).format('yyyy-MM-DDThh:mm');
    this.updated_at = data.updated_at || null;
  }

  static async create(values, callback) {
    const stmt = `
      INSERT INTO stock.sales (
        product_id, product_type, quantity, price, total, payment_method, transaction_code, shop, created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        callback(null, new Sale(data));
      })
      .catch(err => {
        callback(err);
        return;
      });
  }

  static async fetchAll(callback) {
    const stmt = `
      SELECT product_id, product_type, quantity, price, total, payment_method, transaction_code, shop, created_at, updated_at
      FROM stock.sales
      ORDER BY created_at DESC
    `;

    await db.any(stmt, false)
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  }

  static async fetchByID(id, callback) {
    const stmt = `
      SELECT id, product_id, product_type, quantity, price, total, payment_method, transaction_code, shop, created_at, updated_at
      FROM stock.sales
      WHERE id = $1
    `;

    await db.one(stmt, id)
      .then(data => {
        if (!data) {
          var error = status.notfound;
          return callback(error);
        }
        return callback(null, new Sale(data));
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async edit(values, callback) {
    const stmt = `
      UPDATE stock.sales
      SET product_id = $1, product_type = $2, quantity = $3, price = $4, total = $5, payment_method = $6, transaction_code = $7, shop = $8, updated_at = NOW()
      WHERE id = $8
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        return callback(null, new Sale(data));
      })
      .catch(err => {
        return callback(err);
      })
  };

  static async delete(id, callback) {
    const stmt = `
      DELETE FROM stock.sales
      WHERE id = $1
    `;

    await db.none(stmt, id)
      .catch(err => {
        return callback(err);
      })
  };
}

module.exports = Sale;