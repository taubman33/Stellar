DROP DATABASE IF EXISTS stellar_db;
CREATE DATABASE stellar_db;

\c stellar_db;

DROP TABLE IF EXISTS stellar;

CREATE TABLE cheese (
  cheese_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  color VARCHAR(255),
  origin VARCHAR(255),
  stink_level INTEGER
);
