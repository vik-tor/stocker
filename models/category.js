const { db } = require('../db/query');

class Category {
  constructor(data) {
    this.id = data.id || null;
    this.title = data.title;
    this.slug = data.slug;
    this.parent = data.parent || null;
    this.tree = data.tree;
  }

  // create category


  static async create(values, callback) {
    const stmt = `
      INSERT INTO categories (
        title, slug, parent, tree
      )
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        callback(null, new Category(data));
      })
      .catch(err => {
        return callback(err);
      });
  }

  static async fetchAll(callback) {
    const stmt = `
      SELECT id, title, slug, parent, tree
      FROM categories
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
      SELECT id, title, slug, parent, tree
      FROM categories
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

  static async fetchChildren(id, callback) {
    const stmt = `
      SELECT id, title, slug, parent, tree
      FROM categories
      WHERE parent = $1
    `;

    await db.any(stmt, id)
      .then(data => {
        let children = [];
        data.forEach((item) =>
          children.push(new Category(item))
        );
        return callback(null, children);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async edit(values, callback) {
    const stmt = `
      UPDATE categories
      SET title = $1, slug = $2, parent = $3, tree = $4
      WHERE id = $5
    `;

    await db.none(stmt, values)
      .then(data => {
        return callback(null);
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async delete(id, callback) {
    const stmt = `
      DELETE FROM categories
      WHERE id = $1
    `;

    await db.none(stmt, id)
      .then(data => {
        return callback(null);
      })
      .catch(err => {
        return callback(err);
      })
  };
}

module.exports = Category;