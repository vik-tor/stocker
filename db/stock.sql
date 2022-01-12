CREATE DATABASE stocker;

CREATE TYPE processor_type AS ENUM ('celeron', 'pentium', 'atom', 'core_i3', 'core_i5', 'core_i7', 'core_i9', 'amd_ryzen');

CREATE TYPE ram_type AS ENUM ('ddr4', 'ddr3', 'ddr2', 'ddr');

CREATE TYPE graphics_card_type AS ENUM ('nvidia', 'amd', 'intel');

CREATE TYPE storage_type AS ENUM ('ssd', 'hdd', 'hybrid');

CREATE TYPE laptop_brand AS ENUM ('hp', 'dell', 'asus', 'lenovo', 'acer', 'toshiba', 'samsung', 'msi', 'apple');

CREATE TYPE shop AS ENUM ('A', 'F');

CREATE TYPE product_type AS ENUM ('laptop', 'desktop', 'tablet', 'smartphone', 'accessory');

CREATE TABLE stocker.laptops (
  id SERIAL PRIMARY KEY,
  brand laptop_brand NOT NULL,
  model VARCHAR(255) NOT NULL,
  serial_no VARCHAR(255),
  price DECIMAL(10,2) NOT NULL,
  processor processor_type NOT NULL,
  processor_speed INTEGER,
  RAM INTEGER NOT NULL,
  storage_size INTEGER  NOT NULL,
  storage_type storage_type NOT NULL,
  screen_size INTEGER NOT NULL,
  fault_free BOOLEAN NOT NULL,
  fault VARCHAR(255),
  shop shop NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE stocker.phones (
  id SERIAL PRIMARY KEY,
  model VARCHAR(255) NOT NULL,
  serial_no VARCHAR(255),
  price DECIMAL(10,2) NOT NULL,
  processor VARCHAR(255),
  processor_speed INTEGER,
  RAM INTEGER NOT NULL,
  storage_size INTEGER  NOT NULL,
  main_camera INTEGER,
  selfie_camera INTEGER,
  screen_size INTEGER NOT NULL,
  battery_size INTEGER,
  shop shop NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE stocker.accessories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  quantity INTEGER NOT NULL,
  serial_no VARCHAR(255),
  product_type VARCHAR(255),
  product_category VARCHAR(255),
  product_subcategory VARCHAR(255),
  capacity INTEGER,
  shop_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE stocker.sales {
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  quantity INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  transaction_code VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES stocker.products(id)
};

CREATE TABLE stocker.users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);