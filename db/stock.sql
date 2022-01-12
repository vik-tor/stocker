CREATE DATABASE stock;

CREATE TABLE stock.products (
  id SERIAL PRIMARY KEY,
  model VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INTEGER NOT NULL,
  processor VARCHAR(255),
  processor_speed VARCHAR(255),
  RAM INTEGER,
  ROM INTEGER,
  screen_size INTEGER,
  ROM_TYPE VARCHAR(255),
  serial_no VARCHAR(255),
  product_type VARCHAR(255),
  product_category VARCHAR(255),
  product_subcategory VARCHAR(255),
  capacity INTEGER,
  shop_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE stock.sales {
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES stock.products(id)
};