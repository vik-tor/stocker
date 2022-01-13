const { db } = require('../db/query');
const moment = require('moment');

class Product {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title;
    this.slug = data.slug;
    this.images = data.images || null;
    this.price = data.price;
    this.tags = data.tags || null;
    this.location = data.location;
    this.category = data.category;
    this.details = data.details;
    this.specs = data.specs || null;
    this.condition = data.condition;
    this.owner = data.owner;
    this.brand = data.brand || null;
    this.created_at = moment(data.created_at).format('yyyy-MM-DDThh:mm');
    this.updated_at = data.updated_at || null;
  }

  static async create(values, callback) {
    const stmt = `
      INSERT INTO products (
        title, slug, images, price, tags, location_id, category_id, details, specs, condition, owner_id, brand, created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9:json, $10, $11, $12, NOW())
      RETURNING id, title, slug, images, category_id, location_id, price, tags
    `;

    await db.one(stmt, values)
      .then(data => {
        callback(null, new Product(data));
      })
      .catch(err => {
        callback(err);
        return;
      });
  }

  static async fetchAll(callback) {
    const stmt = `
      SELECT id, title, slug, images, price, tags, location_id, category_id, details, condition, brand
      FROM products
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

  static async fetchBySlug(slug, callback) {
    const stmt = `
      SELECT id, title, slug, images, price, tags, location_id, category_id, details, specs, condition, owner_id, brand, created_at, updated_at
      FROM products
      WHERE slug = $1
    `;

    await db.one(stmt, slug)
      .then(data => {
        if (!data) {
          var error = status.notfound;
          return callback(error);
        }
        return callback(null, new Product(data));
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async fetchLikes(id, callback) {
    const stmt = `
      SELECT ARRAY(
        SELECT user_id from product_user
        WHERE product_id = $1
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

  static async edit(values, callback) {
    const stmt = `
      UPDATE products
      SET title = $1, slug = $2, images = $3, price = $4, tags = $5, location_id = $6, category_id = $7, details = $8, specs = $9, condition = $10, owner_id = $11, brand = $12, updated_at = NOW()
      WHERE id = $14
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        return callback(null, new Product(data));
      })
      .catch(err => {
        return callback(err);
      })
  };

  static async delete(id, callback) {
    const stmt = `
      DELETE FROM products
      WHERE id = $1
    `;

    await db.none(stmt, id)
      .catch(err => {
        return callback(err);
      })
  };

  static async addFavorite(pid, uid, callback) {
    const stmt = `
      INSERT INTO product_user(
        product_id, user_id
      )
      VALUES ($1, $2)
    `;

    await db.none(stmt, [pid, uid])
      .catch(err => {
        return callback(err);
      })
  };

  static async removeFavorite(pid, uid, callback) {
    const stmt = `
      DELETE FROM product_user
      WHERE product_id = $1 AND user_id = $2
    `;

    await db.none(stmt, [pid, uid])
      .catch(err => {
        return callback(err);
      })
  };
}

module.exports = Product;