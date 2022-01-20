const { db } = require('../db/query');
const moment = require('moment');

class Accessory {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title;
    this.price = data.price;
    this.quantity = data.quantity;
    this.serial_no = data.serial_no || null;
    this.product_type = data.product_type || null;
    this.product_category = data.product_category || null;
    this.product_subcategory = data.product_subcategory || null;
    this.capacity = data.capacity || null;
    this.shop = data.shop || null;
    this.sold = data.sold || null;
    this.created_at = moment(data.created_at).format('yyyy-MM-DDThh:mm');
    this.updated_at = data.updated_at || null;
  }

  static async create(values, callback) {
    const stmt = `
      INSERT INTO stock.accessories (
        title, price, quantity, serial_no, product_type, product_category, product_subcategory, capacity, shop, created_at, updated_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), $10)
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        callback(null, new Accessory(data));
      })
      .catch(err => {
        callback(err);
        return;
      });
  }

  static async fetchAll(callback) {
    const stmt = `
      SELECT id, title, price, quantity, serial_no, product_type, product_category, product_subcategory, capacity, shop, created_at, updated_at
      FROM stock.accessories
      WHERE sold = false
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
      SELECT id, title, price, quantity, serial_no, product_type, product_category, product_subcategory, capacity, shop, created_at, updated_at
      FROM stock.accessories
      WHERE id = $1
    `;

    await db.one(stmt, id)
      .then(data => {
        if (!data) {
          var error = status.notfound;
          return callback(error);
        }
        return callback(null, new Accessory(data));
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async fetchSold(callback) {
    const stmt = `
      SELECT id, title, price, quantity, serial_no, product_type, product_category, product_subcategory, capacity, shop, created_at, updated_at
      FROM stock.accessories
      WHERE sold = true
      ORDER BY created_at DESC
    `;

    await db.any(stmt, false)
      .then(data => {
        return callback(null, data);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async edit(values, callback) {
    const stmt = `
      UPDATE stock.accessories
      SET title = $1, price = $2, quantity = $3, serial_no = $4, product_type = $5, product_category = $6, product_subcategory = $7, capacity = $8, shop = $9, sold = $10, updated_at = NOW()
      WHERE id = $19
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        return callback(null, new Accessory(data));
      })
      .catch(err => {
        return callback(err);
      })
  };

  static async delete(id, callback) {
    const stmt = `
      DELETE FROM stock.accessories
      WHERE id = $1
    `;

    await db.none(stmt, id)
      .catch(err => {
        return callback(err);
      })
  };

  static async setSold(pid, uid, callback) {
    const stmt = `
      UPDATE stock.accessories
      SET sold = true, updated_at = NOW()
      WHERE id = $1
      RETURNING *
    `;

    await db.none(stmt, [pid, uid])
      .catch(err => {
        return callback(err);
      })
  };
}

module.exports = Accessory;