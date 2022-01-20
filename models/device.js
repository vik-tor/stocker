const { db } = require('../db/query');
const moment = require('moment');

class Device {
  constructor(data) {
    this.id = data.id || null;
    this.brand = data.brand || null;
    this.model = data.model;
    this.slug = data.slug || null;
    this.serial_no = data.serial_no || null;
    this.device_type = data.device_type || null;
    this.images = data.images || null;
    this.price = data.price;
    this.processor = data.processor;
    this.processor_speed = data.processor_speed || null;
    this.ram = data.ram || null;
    this.storage_size = data.storage_size || null;
    this.storage_type = data.storage_type || null;
    this.screen_size = data.screen_size;
    this.fault_free = data.fault_free || null;
    this.condition = data.condition || null;
    this.shop = data.shop || null;
    this.sold = data.sold || null;
    this.created_at = moment(data.created_at).format('yyyy-MM-DDThh:mm');
    this.updated_at = data.updated_at || null;
  }

  static async create(values, callback) {
    const stmt = `
      INSERT INTO stock.devices (
        brand, model, slug, serial_no, device_type, images, price, processor, processor_speed, ram, storage_size, storage_type, screen_size, main_camera, selfie_camera, fault_free, condition, shop, created_at, updated_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, NOW(), $19)
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        callback(null, new Device(data));
      })
      .catch(err => {
        callback(err);
        return;
      });
  }

  static async fetchAll(callback) {
    const stmt = `
      SELECT id, brand, model, slug, serial_no, device_type, images, price, processor, processor_speed, ram, storage_size, storage_type, screen_size, main_camera, selfie_camera, fault_free, condition, shop, created_at, updated_at
      FROM stock.devices
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
      SELECT id, brand, model, slug, serial_no, device_type, images, price, processor, processor_speed, ram, storage_size, storage_type, screen_size, main_camera, selfie_camera, fault_free, condition, shop, created_at, updated_at
      FROM stock.devices
      WHERE id = $1
    `;

    await db.one(stmt, id)
      .then(data => {
        if (!data) {
          var error = status.notfound;
          return callback(error);
        }
        return callback(null, new Device(data));
      })
      .catch(err => {
        return callback(err);
      });
  };

  static async fetchSold(callback) {
    const stmt = `
      SELECT id, brand, model, slug, serial_no, device_type, images, price, processor, processor_speed, ram, storage_size, storage_type, screen_size, main_camera, selfie_camera, fault_free, condition, shop, created_at, updated_at
      FROM stock.devices
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
      UPDATE stock.devices
      SET brand = $1, model = $2, slug = $3, serial_no = $4, device_type = $5, images = $6, price = $7, processor = $8, processor_speed = $9, ram = $10, storage_size = $11, storage_type = $12, screen_size = $13, main_camera = $14, selfie_camera = $15, fault_free = $16, condition = $17, shop = $18, sold = $19, updated_at = NOW()
      WHERE id = $20
      RETURNING *
    `;

    await db.one(stmt, values)
      .then(data => {
        return callback(null, new Device(data));
      })
      .catch(err => {
        return callback(err);
      })
  };

  static async delete(id, callback) {
    const stmt = `
      DELETE FROM stock.devices
      WHERE id = $1
    `;

    await db.none(stmt, id)
      .catch(err => {
        return callback(err);
      })
  };

  static async setSold(id, callback) {
    const stmt = `
      UPDATE stock.devices
      SET sold = true, updated_at = NOW()
      WHERE id = $1
      RETURNING *
    `;

    await db.none(stmt, id)
      .catch(err => {
        return callback(err);
      })
  };
}

module.exports = Device;