CREATE DATABASE stocker;

CREATE schema stock;

CREATE TYPE graphics_card_type AS ENUM ('nvidia', 'amd', 'intel', 'apple');

CREATE TYPE storage_type AS ENUM ('ssd', 'hdd', 'hybrid', 'emmc');

CREATE TYPE shop AS ENUM ('A', 'F');

CREATE TABLE stock.processors (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(255),
  model VARCHAR(255)
);

CREATE TABLE stock.product_types (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE stock.devices (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(255),
  model VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE,
  serial_no VARCHAR(255) UNIQUE,
  device_type INTEGER NOT NULL,
  images TEXT[],
  price DECIMAL(10,2) NOT NULL,
  processor INTEGER NOT NULL,
  processor_speed DECIMAL(5,2),
  RAM INTEGER,
  storage_size INTEGER,
  storage_type storage_type,
  graphics_type graphics_card_type,
  screen_size DECIMAL(5,1) NOT NULL,
  main_camera INTEGER,
  selfie_camera INTEGER,
  fault_free BOOLEAN DEFAULT TRUE,
  condition VARCHAR(255),
  shop shop,
  sold BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (processor) REFERENCES stock.processors (id),
  FOREIGN KEY (device_type) REFERENCES stock.product_types (id)
);

CREATE TABLE stock.accessories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INTEGER NOT NULL,
  serial_no VARCHAR(255),
  product_type INTEGER NOT NULL,
  product_category VARCHAR(255),
  product_subcategory VARCHAR(255),
  capacity INTEGER,
  shop shop,
  sold BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (product_type) REFERENCES stock.product_types (id)
);

CREATE TABLE stock.sales (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  product_type INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  transaction_code VARCHAR(255) UNIQUE,
  shop shop,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (product_type) REFERENCES stock.product_types (id)
);

CREATE TABLE stock.users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  status VARCHAR(255) DEFAULT 'active',
  role VARCHAR(255) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);