CREATE DATABASE stocker;

CREATE TYPE processor_brand AS ENUM ('intel', 'amd');

CREATE TYPE processors_intel AS ENUM ('celeron', 'pentium', 'atom', 'core_i3', 'core_i5', 'core_i7', 'core_i9');

CREATE TYPE processors_amd AS ENUM ('ryzen 3', 'ryzen 5', 'ryzen 7', 'ryzen 9', 'a10', 'a8', 'a6', 'a4');

CREATE TYPE ram_type AS ENUM ('ddr4', 'ddr3', 'ddr2', 'ddr');

CREATE TYPE ram_spec AS ENUM ('10600', '12800');

CREATE TYPE graphics_card_type AS ENUM ('nvidia', 'amd', 'intel');

CREATE TYPE storage_type AS ENUM ('ssd', 'hdd', 'hybrid');

CREATE TYPE laptop_brand AS ENUM ('hp', 'dell', 'asus', 'lenovo', 'acer', 'toshiba', 'samsung', 'msi', 'apple');

CREATE TYPE shop AS ENUM ('A', 'F');

CREATE TYPE accesory_type AS ENUM ('charger', 'bag', 'headphones', 'battery', 'mouse', 'keyboard', 'smartwatch');

CREATE TABLE stocker.laptops (
  id SERIAL PRIMARY KEY,
  brand laptop_brand NOT NULL,
  model VARCHAR(255) NOT NULL,
  serial_no VARCHAR(255),
  price DECIMAL(10,2) NOT NULL,
  processor processor_brand NOT NULL,
  processor_speed INTEGER,
  RAM INTEGER,
  storage_size INTEGER,
  storage_type storage_type,
  screen_size INTEGER NOT NULL,
  fault_free BOOLEAN NOT NULL,
  condition VARCHAR(255),
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

CREATE TABLE stocker.processors (
  id SERIAL PRIMARY KEY,
  brand VARCHAR(255),
  model VARCHAR(255)
);

CREATE TABLE stocker.ram (
  id SERIAL PRIMARY KEY,
  type ram_type NOT NULL,
  spec ram_spec NOT NULL,
  speed INTEGER NOT NULL
);