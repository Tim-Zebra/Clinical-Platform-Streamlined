DROP DATABASE IF EXISTS name_db;
CREATE DATABASE name_db;

USE name_db;

CREATE TABLE table_name(
  id INT NOT NULL,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(30) NOT NULL
);
